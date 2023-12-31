import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';


interface Props extends InputHTMLAttributes<HTMLSelectElement> {
    options: string[]
};

const SelectStyled = styled.select`
    padding: 0.55rem;
    border: 1px solid #e3e3e3;
    border-radius: 0.25rem;
    background: #fbfbfb;
    font-weight: 300;
    font-size: 1rem;
    cursor: pointer;
  `;

const Select = ({ disabled, name, onChange, options, value }: Props) => {

    return (
        <SelectStyled disabled={disabled} name={name} onChange={onChange} value={value}>
            {options?.map(nameCoin => <option key={nameCoin} value={nameCoin}>{nameCoin}</option>)}
        </SelectStyled>
    );
};

export default Select;