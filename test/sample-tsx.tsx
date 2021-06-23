// eslint-disable-next-line import/no-extraneous-dependencies
import React, { FC, useEffect, useState } from 'react';

interface SampleProps {
  title: string;
}

export const Sample: FC<SampleProps> = ({ title }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    const a = title;

    setState(a);
    // If line below is removed react-hooks should report error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change true to something else to test jsx-a11y
  return <div aria-busy="true">{state}</div>;
};
