export const replaceCat=(cat)=> {
    let area = cat.slice(0, 1);
    switch (area) {
        case "1":
            area = "7"
            break;
        case "2":
            area = "96"
            break;
        case "6":
            area = "8"
            break;
        case "7":
            area = "16"
            break;
        case "4":
            area = "0"
            break;

        default:
            break;
    }
    let type = cat.slice(3);

    let replaced = { area, type };
    return replaced;
}