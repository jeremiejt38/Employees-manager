import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from '../../services/manager.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [MessageService],
})
export class CreateProjectComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private managerService: ManagerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      projectName: [null, [Validators.required]],
      client: [null, [Validators.required]],
      details: [null, [Validators.required]],
    });
  }

  postProject(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
    // Valider le formulaire
    if (this.validateForm.invalid) {
      for (const i in this.validateForm.controls) {
        if (this.validateForm.controls.hasOwnProperty(i)) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }
      }
      return;
    }

    // Créer un objet JSON avec les données du formulaire
    const projectData = {
      projectName: this.validateForm.get('projectName')!.value,
      clientName: this.validateForm.get('client')!.value,
      description: this.validateForm.get('details')!.value,
    };

    // Appeler le service pour envoyer les données au serveur
    this.managerService.postProject(projectData).subscribe(
      (res) => {
        console.log('Project posted successfully', res);

        this.router.navigateByUrl('/manager/dashboard', {
          state: { toastMessage: 'Project posted successfully' },
        });
      },
      (error) => {
        console.error('Error posting project', error);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        });
      }
    );
  }
}
