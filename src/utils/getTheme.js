export const getTheme = () => {
    const dateNow = new Date().getHours()
    if (dateNow >=6 && dateNow <=17) {
        return 'theme-day'
    } else {
        return 'theme-night'
    }
}