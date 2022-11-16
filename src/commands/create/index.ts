import { readDir, mkdir, rm, Cred } from '@utils';

export default async function(projectName, cmd) {
    const currentPath = process.cwd() + '/' + projectName;
    try {
        const exists = await readDir(currentPath);
        console.log(cmd.force, '222=====')
        if (cmd?.force) {
            exists && await rm(currentPath);
            await mkdir(currentPath);
        } else {
            if (exists) { // 不存在文件夹提示错误 返回
                console.log(Cred('Not exists dir'));
                return;
            }
            await mkdir(currentPath);
            // 下载模版了
            // dowload-git-repo

        }

    } catch (e) {
        console.log(Cred('it exists'));
        console.log(e, 'e')
    }
    // console.log('----')
}