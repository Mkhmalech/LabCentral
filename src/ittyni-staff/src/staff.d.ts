type EmployerDepartement  = string
type EmployerPPR = number

interface Employer extends Person{
  departement : EmployerDepartement
  PPR ?  : EmployerPPR 
}

interface LabStaffState {
  staff ?: [Employer];
}
// daba ghadi namchiw el partie s3iba fin initializiw a state dyalna
