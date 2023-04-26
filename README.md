# readmeGenerator

# Project Description

## License function generateLicense(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    } else if (license === "Apache 2.0") {
        return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    } else if (license === "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    } else if (license === "BSD") {
        return "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    } else {
        return ""
    }
}(license) 

### A third-level heading