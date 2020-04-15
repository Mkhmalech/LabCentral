interface MonthShift {
    shiftType : "day" | "night"
    employer : Employer
    days : number[]
}

interface AllMonthsShift {
    month : string
    shifts : MonthShift[]
}

interface LaboShiftState {
    nextMonth? : MonthShift[]
    allMonths? : AllMonthsShift[]
}