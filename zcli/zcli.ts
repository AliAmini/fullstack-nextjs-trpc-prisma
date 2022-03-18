import fs from "fs";
import path from "path";

// console.log('==== process.argv', process.argv);
/* 
command: $ node zero-cli/zero-cli.js hello my

process.argv is:
[
  'C:\\Program Files (x86)\\nodejs\\node.exe',
  'D:\\ali\\projects\\front\\my-nextapp\\zero-cli\\zero-cli.js',
  'hello',
  'my'
]
*/

/**
 * --  ZERO CLI --------------------------
 * 
 * 
 * Command: node zero-cli.js    [command]      [type]       [name]
 * Define: node zero-cli.js   {g:generate} {c:component} {fileName}
 * Example: node zero-cli.js  g c Home (generate component Home)
 * 
 */



type Keyword = {name: string, short: string};
interface Keywords {
  [key: string]: Keyword
};

const KEYWORDS: Keywords = {
  generate: {name: 'generate', short: 'g'},
  component: {name: 'component', short: 'c'},
};


async function runCommand() {
  console.log('---- start to run command -----');
  

  // const command = getValidKeyword(process.argv[2]); // is "generate" - we don't need it
  const elementTypeKey = getValidKeyword(process.argv[3]); // is "component" - it is static
  const destFileName = process.argv[4]; // variable file name


  type ElementType = {projectPath: string};
  interface ElementTypes {
    [elementType: string]: ElementType
  };
  const elementTypes: ElementTypes = {
    component: {projectPath: './components/'}
  }
  

  const curElementType: ElementType | null = elementTypes[elementTypeKey];

  if(!curElementType) throw new Error(`There is no "${elementTypeKey}" type!`);

  

  /// === start to 
  const dirPath = path.join(__dirname, elementTypeKey);
  const files: string[] = fs.readdirSync(dirPath);
  const REPLACE_KEYWORD = 'FILE_NAME';
  // console.log(files); // [ 'FILE_NAME.component.tsx', 'FILE_NAME.module.scss' ]

  files.forEach(fileName => {
    const filePath = path.join(dirPath, fileName);
    let fileDate = fs.readFileSync(filePath, {encoding: 'utf-8'});

    // replace all FILE_NAMEs
    fileDate = fileDate.replace(new RegExp(REPLACE_KEYWORD, 'g'), destFileName);
    // console.log('file, data:', fileName, fileDate);

    // == write file ====
    const finalFilePath = path.join('./',  curElementType.projectPath, destFileName, fileName.replace(REPLACE_KEYWORD, destFileName));
    console.log('==== wrinting: ', finalFilePath);
    fs.mkdirSync(path.dirname(finalFilePath), { recursive: true } ); // make sure dir exists
    fs.writeFileSync(finalFilePath, fileDate);
    
  });


}


function getValidKeyword(inputKey: string) : string {
  inputKey = inputKey.trim();

  let keywordName: string = '';
  
  Object.keys(KEYWORDS).find(key => {
    const curKeyword: Keyword = KEYWORDS[key];

    if([curKeyword.name, curKeyword.short].includes(inputKey)) {
      keywordName = curKeyword.name;
      
      return true;
    }

    return false;
  });

  if(!keywordName) throw new Error(`"${inputKey}" is not a valid keyword;`);
  
  let keyword: Keyword = KEYWORDS[keywordName];

  return keyword.name;
}


runCommand();
export default runCommand;