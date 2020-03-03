const fs = require('fs');

class setFile {
    constructor(pathTemplate, fileNamePath) {
        this.pathTemplate = pathTemplate;
        this.fileNamePath = fileNamePath;
    }

    getFile() {
        try {
            return fs.readFileSync(this.pathTemplate, 'utf8');
        } catch (error) {
            console.log(error);
        }
    }

    getLines(content) {
        try {
            const lines = content.split(/\r?\n/);
            const lineRequire = 0;
            const lineRoute = lines.length - 2;
            return {
                lineRequire,
                lineRoute
            }
        } catch (err) {
            console.error(err);
        }
    }

    appeded(line, content, search) {
        if (content.indexOf(search) < 0 ) {
            content = content.split('\n');
            content.splice(line + 1,0,search);
            content = content.filter((str) => str);
            return content.join('\n');
        }
    }

    writeFile(content) {
        const encoding = "utf8";
        fs.writeFileSync(this.fileNamePath, content, encoding, (err)=> { 
            console.log(err);
            if (err) throw err;
            console.log("The file was succesfully saved!");
        })
    }
}

module.exports = setFile;