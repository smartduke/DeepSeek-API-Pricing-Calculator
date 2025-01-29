# DeepSeek API Pricing Calculator

A responsive, interactive calculator for estimating costs when using DeepSeek's AI APIs.

![Calculator Screenshot](screenshot.png)

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
git clone https://github.com/yourusername/deepseek-pricing-calculator.git
```bash

2. Open index.html in any modern browser

Customization
1. Update pricing rates in js/script.js:
const DEEPSEEK_RATES = {
    proInput: 0.002,    // Update these values
    proOutput: 0.004,
    lite: 0.001,
    embeddings: 0.0001
};

2. Modify styles in css/style.css

3. Add new models in the HTML and JavaScript files


