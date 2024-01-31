import React from 'react';
import { Controller } from "react-hook-form";
import { styled, InputBase, FormControl, FormHelperText, Select, MenuItem } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';

const InputBaseStyled = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    border: 'solid 1px #f2f3f5',
    fontSize: 16,
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    transition: theme.transitions.create(['border-color']),
    '&:focus': {
      borderColor: theme.palette.primary.light,
    },
    '&::placeholder': {
      color: theme.palette.primary.light,
      opacity: 1,
    },
  },
}));

type Props = {
  id: string;
  name: string;
  control: any;
  validations: object;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  type?: string;
  isError: any;
  elementType?: string; 
  selectOptions?: any;
  selectValueField?: string;
  selectLabelField?: string;
}

function CustomInput({ 
  name,
  control,
  validations,
  placeholder = '',
  multiline = false,
  rows = 4,
  disabled = false,
  type = 'text',
  isError = false,
  elementType = 'text',
  selectOptions = [],
  selectValueField = 'value',
  selectLabelField = 'label',
}: Props){
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <FormControl sx={{ width: '100%' }} error={isError?.type ? true : false}>
      {elementType === 'text' && 
        <Controller
          name={name}
          control={control}
          rules={validations}
          render={({ field: { onChange, value }}) => (
            <InputBaseStyled
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              multiline={multiline}
              rows={rows}
              disabled={disabled}
              type={type}
            /> 
          )}
        />
      }
      {elementType === 'select' && 
        <Controller
            name={name}
            control={control}
            rules={validations}
            render={({ field: { onChange, value } }) => (
                <Select
                    onChange={onChange}
                    value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    disabled={disabled}
                    input={<InputBaseStyled />}
                    IconComponent={ExpandMoreOutlinedIcon}
                >
                    {placeholder && 
                      <MenuItem disabled value="">
                        <em style={{ 
                          fontStyle: 'normal', 
                          color: '#8c8c8c' 
                        }}>
                          {placeholder}
                        </em>
                      </MenuItem>
                    }
                    {selectOptions.length > 0 && 
                      selectOptions.map((item: any, index: any) => (
                        <MenuItem key={index} value={item[selectValueField]}>
                            {item[selectLabelField]}
                        </MenuItem>
                    ))}
                </Select>
            )}
        />
      }
      {elementType === 'date' &&
        <Controller
          name={name}
          control={control}
          rules={validations}
          render={({ field: { onChange, value }}) => (
            <DatePicker
              // inputFormat="MM/dd/yyyy"
              // onChange={onChange} 
              // value={value}
              // renderInput={(params: any) => (
              //     <InputBaseStyled {...params} sx={{ width:  '100%' }} error={isError} />
              // )}
              // disabled={disabled}
            />
          )}
        />
      }
      {isError && 
          <FormHelperText>
              {isError.message}
          </FormHelperText>
      }
    </FormControl>
    </LocalizationProvider>
  )
}

export { CustomInput };