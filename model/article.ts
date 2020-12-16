import { A } from "../modules/db"
class ArticleClass {
    title: string | undefined;
    desc?: string | undefined;
}

var ArtivleModle = new A.Mysql<ArticleClass>();
export {ArticleClass, ArtivleModle}
