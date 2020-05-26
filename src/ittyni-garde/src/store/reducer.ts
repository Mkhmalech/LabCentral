import { Reducer, AnyAction } from "redux";
import { ShiftActions } from "./actions";
import moment from "moment";

const initState: LaboShiftState = {};

export const shiftReducer: Reducer = (state = initState, action: AnyAction) => {
  const {type, payload } = action;
  switch (action.type) {
    case ShiftActions.LAB_LABO_SHIFT_FETCH_ALL_SUCCESS:
      return { ...state, shifts: action.payload.fetchAllShifts };
    case ShiftActions.LAB_LABO_SHIFT_CLASSIFY_DATA:
      return {
        ...state,
        shiftsTable: getMonthShift(
          action.month,
          action.departement,
          state.shifts
        ),
      };
    case ShiftActions.LAB_LABO_SHIFT_DELETE_SUCCESS : 
      return{ ...state, isShiftDeleted : payload.employerDelete}
    default:
      return { ...state };
  }
};

// create shifts data
const getMonthShift = (
  month: string,
  departement: string,
  fetchedshifts: any[]
) => {
  let shift: any = {
    month: moment(month, "YYYY-MM").month() + 1,
    year: moment(month, "YYYY-MM").year(),
    days: [],
    departement: departement,
  };

  for (let i = 0; i < moment(month, "YYYY-MM").daysInMonth(); i++) {
    if (fetchedshifts && fetchedshifts.length > 0) {
      const empD = fetchedshifts.find(
        (s: any) =>
          s.mounth === shift.month &&
          s.departement.name === shift.departement &&
          s.days.find((day: any) => day == i + 1) &&
          s.type === "Jours"
      );
      const empN = fetchedshifts.find(
        (s: any) =>
          s.mounth === shift.month &&
          s.departement.name === shift.departement &&
          s.days.find((day: any) => day == i + 1) &&
          s.type === "Nuits"
      );
      shift.days.push({
        dayName: moment(`${month}-${i + 1}`, "YYYY-MM-DD")
          .format("dd")
          .toUpperCase(),
        day: i + 1,
        date: `${month}-${i + 1}`,
        dayShift : { employer: empD ? empD.employer : "", id : empD ? empD.id : "" },
        nightShift : { employer: empN ? empN.employer : "", id : empN ? empN.id : ""}
      });
    } else {
        shift.days.push({
            dayName: moment(`${month}-${i + 1}`, "YYYY-MM-DD")
              .format("dd")
              .toUpperCase(),
            day: i + 1,
            date: `${month}-${i + 1}`
         });
    }
    
  }

  return shift;
};
