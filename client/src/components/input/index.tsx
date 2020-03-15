/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { colors } from 'theme';

interface inputStyledProps {
    hasError: boolean;
}

const StyledInput = styled.input<inputStyledProps>`
    color: ${colors.black},
    backgroundColor: ${(props: inputStyledProps) => (props.hasError ? colors.red : colors.black)}
`;

type propTypes = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> & {
    ErrorMessage?: string;
    validate?: (element: HTMLInputElement, html5Validity: boolean) => Promise<boolean>;
}

const Input: React.FC<propTypes> = (props) => {
  const { ErrorMessage, validate } = props;
  const inputRef = useRef < HTMLInputElement | null >(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const setRef = useCallback(
    (ref: HTMLInputElement | null) => {
      inputRef.current = ref;
    },
    [],
  );

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const html5Validity = !inputRef.current?.validity.valid;
      setHasError(validate ? await validate(event.target, html5Validity) : html5Validity);
      if (props.onChange) {
        props.onChange(event);
      }
    },
    [props, validate],
  );

  return (
    <>
      <StyledInput {...props} ref={setRef} hasError={hasError} onChange={handleChange} />
      {
          hasError
              && <div>{ ErrorMessage }</div>
      }
    </>
  );
};

export default Input;
