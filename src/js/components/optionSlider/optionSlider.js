import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default ({ animation, label, value, min, max, onChange, name }) => {
    const handleChange = (_, newValue) => onChange(name, newValue);
    return (
        <Box
            width="100%"
            style={animation}
        >   
            <Typography id="slider" gutterBottom color="textPrimary">
              {label}
            </Typography>
            <Slider
                aria-labelledby="slider"
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={min}
                max={max}
            />
        </Box>
    )
}