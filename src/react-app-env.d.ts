/// <reference types="react-scripts" />
/// <reference types="./ittyni-staff" />

interface Garde {}

interface LabCentralState {
  //hadi hiya state dyal application hna fin ghadi nzeed staff :ok
  staff?: LabStaffState; // hna darnah y9ad ykon undefined bach maybanch:
  // garde: Garde;
  router: RouterState;
}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any;
}
