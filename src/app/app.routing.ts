import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//COMPONENTES QUE USA EL APP
import { LoginComponent } from './components/login.component';
import { ListaCursosComponent } from './components/listaCursos.component';
import { listaPacientesComponent } from './components/listaPacientes.component';
import { AgendaComponent } from './components/agenda.component';
import { DetallePacienteComponent } from './components/detallePaciente.component';
import { DetalleCitaComponent } from './components/detalle-cita/detalle-cita.component';
import { NuevoPacienteComponent } from './components/nuevoPaciente.component';
import { AgregaCitaComponent } from './components/agrega-cita/agrega-cita.component';
import { EditaPacienteComponent } from './components/edita-paciente/edita-paciente.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistroAlumnoComponent } from './components/registro-alumno/registro-alumno.component';
import { LoginProfesorComponent } from './components/login-profesor/login-profesor.component';
import { CursosProfesorComponent } from './components/cursos-profesor/cursos-profesor.component';
import { RegistroProfesorComponent } from './components/registro-profesor/registro-profesor.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { DetalleCursoProfesorComponent } from './components/detalle-curso-profesor/detalle-curso-profesor.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { DetalleCursoAlumnoComponent } from './components/detalle-curso-alumno/detalle-curso-alumno.component';
import { AgregaConsultaComponent } from './components/agrega-consulta/agrega-consulta.component';
import { EvaluaAlumnoComponent } from './components/evalua-alumno/evalua-alumno.component';

const appRoutes: Routes=[

  {path:'profesor',component:LoginProfesorComponent},
  {path:'profesor/cursos',component:CursosProfesorComponent},
  {path:'profesor/evaluar-alumno/:id',component:EvaluaAlumnoComponent},
  {path:'profesor/crear-curso',component:CrearCursoComponent},
  {path:'profesor/detalle-curso/:id',component:DetalleCursoProfesorComponent},
  {path:'profesor/detalle-alumno/:idAlumno/:idCurso',component:DetalleAlumnoComponent},
  {path:'registro-profesor',component:RegistroProfesorComponent},


  {path:'registro-alumno',component:RegistroAlumnoComponent},
  {path:'cursos',component:ListaCursosComponent},
  {path:'detalleCurso/:id',component:DetalleCursoAlumnoComponent},
  {path:'paciente/:id',component:DetallePacienteComponent},
  {path:'nuevoPaciente',component:NuevoPacienteComponent},
  {path:'editaPaciente/:id',component:EditaPacienteComponent},
  {path:'pacientes',component:listaPacientesComponent},
  {path:'agenda',component:AgendaComponent},
  {path:'agregaConsulta/:id',component:AgregaConsultaComponent},
  {path:'userProfile',component:UserProfileComponent},
  {path:'nuevaCita',component:AgregaCitaComponent},
  {path:'detalleCita/:id',component:DetalleCitaComponent},
  {path:'**',component:LoginComponent}
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
