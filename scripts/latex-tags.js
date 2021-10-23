#!/usr/bin/env node

const tags = {
  amazonsthreetag: {
    text: "Amazon S3",
    rgb: "0,134,194",
    color: "white",
  },
  androidtag: {
    text: "Android",
    rgb: "167,224,130",
  },
  apitag: {
    text: "API",
    rgb: "234,234,134",
  },
  backbonetag: {
    text: "BackboneJS",
    rgb: "0,134,194",
    color: "white",
  },
  cicdtag: {
    text: "CI/CD",
    rgb: "124,186,112",
  },
  circlecitag: {
    text: "CircleCI",
    rgb: "70,189,64",
  },
  djangotag: {
    text: "Django",
    rgb: "12,60,38",
    color: "white",
  },
  eclipseplugintag: {
    text: "Plugin Eclipse",
    rgb: "157,146,240",
  },
  emberjstag: {
    text: "EmberJS",
    rgb: "224,78,57",
    color: "white",
  },
  estag: {
    text: "ElasticSearch",
    rgb: "207,207,207",
  },
  gcptag: {
    text: "GCP",
    rgb: "0,134,194",
    color: "white",
  },
  githubactionstag: {
    text: "Github Actions",
    rgb: "246,186,53",
  },
  hibernatetag: {
    text: "Hibernate",
    rgb: "188,174,121",
  },
  iostag: {
    text: "iOS",
    rgb: "215,134,234",
  },
  javatag: {
    text: "Java",
    rgb: "234,144,144",
  },
  jstag: {
    text: "JS",
    rgb: "248,220,61",
    color: "darkgray"
  },
  kubernetestag: {
    text: "Kubernetes",
    rgb: "0,134,194",
    color: "white",
  },
  lotusnotestag: {
    text: "Lotus Notes",
    rgb: "246,186,53",
  },
  objectivectag: {
    text: "Objective-C",
    rgb: "134,206,234",
  },
  pythontag: {
    text: "Python",
    rgb: "55,118,171",
  },
  springtag: {
    text: "Spring",
    rgb: "124,186,112",
  },
  sqlitetag: {
    text: "SQLite",
    rgb: "234,175,230",
  },
  stenciljstag: {
    text: "StencilJS",
    rgb: "224,78,57",
  },
  terraformtag: {
    text: "Terraform",
    rgb: "109,103,230",
    color: "white",
  },
  websockettag: {
    text: "WebSocket",
    rgb: "234,175,230",
  },
  csstag: {
    text: "CSS",
    rgb: "40,168,221"
  },
  lesstag: {
    text: "LESS",
    rgb: "29,53,92",
    color: "white",
  },
  sasstag: {
    text: "SASS",
    rgb: "204,102,153",
  },
  gatsbytag: {
    text: "Gatsby",
    rgb: "101,51,149",
    color: "white",
  },
  reacttag: {
    text: "React",
    rgb: "95,217,251",
  },
  nodejstag: {
    text: "Node.js",
    rgb: "2,88,0",
    color: "white",
  },
  vuejstag: {
    text: "Vue.js",
    rgb: "53,148,105",
    color: "white",
  },
  internationalizationtag: {
    text: "i18n",
    rgb: "161,202,241",
    color: "white",
  },
  accessibilitytag: {
    text: "a11y",
    rgb: "202,161,241",
    color: "white",
  },
}

Object.keys(tags)
  .sort((a, b) => (a > b ? 1 : -1))
  .forEach((tag) => {
    let { text, rgb, color } = tags[tag]
    console.log(`\\usepackage{tikz}
    
\\definecolor{${tag}}{RGB}{${rgb}}
\\tikzstyle{${tag}} = [draw=${tag}, fill=${tag}, very thick, rectangle, rounded corners, inner sep=1pt, inner ysep=2pt]
\\newcommand{\\${tag}}{\\begin{tikzpicture}\\node [${tag}] (box){{\\scriptsize ${
      color ? `\\color{${color}}{` : ``
    }\\textbf{\\phantom{|}${text}\\phantom{|}}}}${
      color ? `}` : ``
    };\\end{tikzpicture}}`)
  })
