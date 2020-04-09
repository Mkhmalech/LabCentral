
type EmployerDepartement  = string
type EmployerPPR = number

interface Employers extends Person{
  departement : EmployerDepartement
  PPR ?  : EmployerPPR 
}

interface LabStaffState {
  staff ?: [Employers];
}
// daba ghadi namchiw el partie s3iba fin initializiw a state dyalna
