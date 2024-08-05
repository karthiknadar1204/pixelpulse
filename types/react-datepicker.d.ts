declare module 'react-datepicker' {
    import React from 'react';
  
    export interface ReactDatePickerProps {
      selected?: Date | null; // Allow selected to be Date or null
      onChange?: (date: Date | null) => void; // Allow onChange to handle Date or null
      showTimeSelect?: boolean;
      timeFormat?: string;
      timeIntervals?: number;
      timeCaption?: string;
      dateFormat?: string;
      className?: string;
      // Add any other props you use from react-datepicker
    }
  
    const ReactDatePicker: React.FC<ReactDatePickerProps>;
  
    export default ReactDatePicker;
  }
  