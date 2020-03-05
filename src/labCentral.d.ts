/// <reference path="./Personal/personal.d.ts" />
interface Garde {}

interface LabCentral {
  personal: Personal;
  // garde: Garde;
}

// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any;
}
