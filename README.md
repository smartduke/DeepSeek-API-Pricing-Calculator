## DeepSeek API Pricing Calculator

A responsive, interactive calculator for estimating costs when using DeepSeek's AI APIs.

<img width="613" alt="cal" src="https://github.com/user-attachments/assets/d0a14180-ce3c-422d-b7a4-326290065cf3" />

## Features

- Real-time cost calculations
- Mobile-responsive design
- Detailed cost breakdown
- Four pricing models supported
- Easy-to-update rate configuration
- No external dependencies (except jQuery CDN)

## Setup

1. Clone repository:
```bash
git clone https://github.com/smartduke/DeepSeek-API-Pricing-Calculator.git
```
2. Open index.html in any modern browser

## Customization

1. Update pricing rates in js/script.js:
```bash
const DEEPSEEK_RATES = {
    proInput: 0.002,    // Update these values
    proOutput: 0.004,
    lite: 0.001,
    embeddings: 0.0001
};
```
3. Modify styles in css/style.css

4. Add new models in the HTML and JavaScript files


** LICENSE**
```text
MIT License

Copyright (c) 2025 SmartDuke Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

