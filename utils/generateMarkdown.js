//  Create a function that returns a license badge based on which license is passed in
//  If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license !== 'none') {
    licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  } 
return licenseBadge;
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license !== 'none'){
    licenseLink = '';
    licenseLink = `https://opensource.org/licenses/${license}`;
  }
  return licenseLink;
}

//  Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  let licenseName = '';
  switch(license){
    case 'Apache_2.0':
      licenseSection = `Licensed under the Apache License, Version 2.0 (the \"License\");<br>you may not use this file except in compliance with the License.<br>You may obtain a copy of the License at<br><br>[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)<br><br>Unless required by applicable law or agreed to in writing, software<br>distributed under the License is distributed on an \"AS IS\" BASIS,<br>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or<br>implied.<br>See the License for the specific language governing permissions and <br>limitations under the License.`
      break;
    case 'bsd_2_clause':
      licenseSection = ` THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
      SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
      CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
      OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
      OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
      break;
    case 'MIT':
      licenseSection = `Permission is hereby granted, free of charge, to any person obtaining a copy of<br>this software and associated documentation files (the “Software”), to deal in<br>the Software without restriction, including without limitation the rights to use,<br>copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the<br>Software, and to permit persons to whom the Software is furnished to do so,<br>subject to the following conditions:<br><br>The above copyright notice and this permission notice shall be included in all<br>copies or substantial portions of the Software.<br><br>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,<br>EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES<br>OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND<br>NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT<br>HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,<br>WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING<br>FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR <br>OTHER DEALINGS IN THE SOFTWARE.`
      break;
    default:
    licenseSection = '';
  }
  return licenseSection;
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n\n${renderLicenseBadge(data.license)}\n\n 
  ## Description\n\n${data.description}\n\n 
  ## Installation\n${data.installation}\n\n 
  ## Usage\n${data.usage}\n\n
  ## My Github \n\n [${data.userName}](https://github.com/${data.userName}) \n\n 
  For more questions contact me at [${data.email}](mailto:${data.email}) \n\n 
  # Licences \n\n Copyrite (c) ${data.userName} \n\n 
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
