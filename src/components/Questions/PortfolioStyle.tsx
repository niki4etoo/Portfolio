export const portfolioStyle = {
    container: (defaultStyles: any) => ({
        ...defaultStyles,
        display: 'flex',
        width: '100%',
    }),
    option: (defaultStyles: any, state: any) => ({
        ...defaultStyles,
        color: state.isSelected ? '#fff' : '#000',
        backgroundColor: state.isSelected ? '#000' : '#fff',
    }),

    control: (defaultStyles: any) => ({
        ...defaultStyles,
        display: 'flex',
        width: '100%',
        backgroundColor: '#fff',
        margin: '2vh auto',
        padding: '10px',
        border: '3px solid blue',
        boxShadow: 'none',
        ':hover': {
            backgroundColor: '#ffe',
        }
    }),
    singleValue: (base: any) => ({
        ...base,
        padding: '5px 10px',
        borderRadius: 5,
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',

        width: 'fit-content',
    }),
};