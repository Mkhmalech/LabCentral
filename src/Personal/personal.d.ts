declare type Status =
  | "Satgiaire"
  | "Technicien"
  | "Resident"
  | "Secretaire"
  | "ATP"
  | "Administrateur"
  | "femme de menage";

declare type FirstName = string;
declare type LastName = string;
declare type PPR = number;

interface Personal {
  firstName: FirstName;
  lastName: LastName;
  ppr: PPR;
  status: Status;
  addNewPersonal: (fn: FirstName, ln: LastName) => void;
}
