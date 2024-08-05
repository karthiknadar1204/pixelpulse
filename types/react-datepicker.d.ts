declare module 'react-datepicker' {
    import React from 'react';
  
    // Type definitions for ReactDatePickerProps
    export interface ReactDatePickerProps {
      selected?: Date;
      onChange?: (date: Date | null) => void;
      showTimeSelect?: boolean;
      timeFormat?: string;
      timeIntervals?: number;
      timeCaption?: string;
      dateFormat?: string;
      className?: string;
      // Add any other props you use from react-datepicker
    }
  
    // Define the ReactDatePicker component
    const ReactDatePicker: React.FC<ReactDatePickerProps>;
  
    export default ReactDatePicker;
  }
  