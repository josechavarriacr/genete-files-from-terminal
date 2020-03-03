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