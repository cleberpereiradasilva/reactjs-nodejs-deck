import Model from "./Model";

export default interface Video extends Model {
    name: string,
    url: string,
    displayedAt: Date,
}
