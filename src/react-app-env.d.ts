/// <reference types="react-scripts" />
/// <reference types="./ittyni-staff" />

// Globals
type PersonCivility = string;
type PersonFirstName = string;
type PersonLastName = string;
type PersonEmail = string;
interface Person {
  civility?: PersonCivility;
  firstName: PersonFirstName;
  lastName: PersonLastName;
  email?: PersonEmail;
}

interface Garde {}

interface LabCentralState {
  //hadi hiya state dyal application hna fin ghadi nzeed staff :ok
  staff?: string; // hna darnah y9ad ykon undefined bach maybanch:
  // garde: Garde;
  router: RouterState;
}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any;
}
