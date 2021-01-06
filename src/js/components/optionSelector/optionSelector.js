import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default ({ options, onChange, value, animation, name }) => (
    <FormControl
        fullWidth
        margin="dense"
        variant="filled"
        style={animation}
    >
        <InputLabel id="label">
            {value === 'custom' ? `No ${name.toLowerCase()} selected` : `Current ${name}`}
        </InputLabel>
        <Select
            labelId="label"
            value={value === 'custom' ? '' : value}
            onChange={onChange}
        >
            {options.map((option, i) => (
                <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
            ))}
        </Select>
    </FormControl>
);