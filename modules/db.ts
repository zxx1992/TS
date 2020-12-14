var dburl = "xxxx";
function getDbData(): any[] {
    console.log("获取数据库的数据");
    return [
        {
            title: "123"
        },
        {
            title: "456"
        },
    ]
}
function save() {
    console.log("save data");
}
export default getDbData
// export {dburl, getDbData,save}