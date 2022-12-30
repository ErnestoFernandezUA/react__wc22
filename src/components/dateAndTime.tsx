import { FunctionComponent } from "react";

type Props = {
  date: string;
  time: string;
  isCompleted: boolean;
};

export const DateAndTime: FunctionComponent<Props> = ({ date, time, isCompleted }) => (
    <p style={{
      backgroundColor: isCompleted ? 'pink' : 'green',
      borderRadius: '30px',
      width: 'max-content',
      padding: '0 15px',
      // lineHeight: '30px',
      position: 'relative',
    }}>
      {date}
      <span style={{
        backgroundColor: 'white',
        border: '1px solid black',
        fontSize: '12px',
        position: 'absolute',
        borderRadius: '30px',
        width: 'max-content',
        padding: '0 5px',
        top: '-10px'
      }}
      >
        {time}
      </span>
    </p>
  );

