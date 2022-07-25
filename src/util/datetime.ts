export const getAge = () => {
    const birthYear = 2003;
    const birthMonth = 2;
    const birthDate = 26;
    const currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    if (Date.now() < +new Date(currentYear, birthMonth - 1, birthDate))
        age--;

    return age;
}
