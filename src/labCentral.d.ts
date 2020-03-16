/// <reference types="./labPersonal-ittyni" />
interface Garde {}

interface LabCentral {
  personal: Personal;
  // garde: Garde;
}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any;
}
