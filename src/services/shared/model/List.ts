import Video from "./Video";
import Model from "./Model";

export default interface List extends Model {
  videos: Video[];
}
