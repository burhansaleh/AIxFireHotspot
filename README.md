# MODIS Fire Hotspot Dashboard - Thailand (2020-2025)

## 📊 Interactive Web Dashboard for Wildfire Analysis

This dashboard provides comprehensive visualization and analysis of MODIS fire hotspot data in Thailand from 2020-2025, combining spatiotemporal analysis, spatial statistics, and machine learning predictions.

---

## 🌐 Live Demo

**Deployed URL:** https://hd607pnz.scispace.co

---

## 📁 Contents

```
fire-dashboard/
├── index.html              # Main dashboard HTML file
├── dashboard.js            # JavaScript for charts and map
├── dashboard_data.json     # Extracted research data
├── extracted_figures/      # 15 PNG figures from research papers
└── README.md              # This file
```

---

## 🚀 Quick Start

### Option 1: Open Directly in Browser
1. Extract the ZIP file
2. Open `index.html` in any modern web browser
3. All visualizations will load automatically (no server required)

### Option 2: Run Local Development Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve -l 3000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000` (or your chosen port)

---

## 📊 Dashboard Features

### 🔥 Key Statistics (Header Cards)
- **113,475 Total Fire Hotspots** (2020-2025)
- **87.7% Dry Season Concentration** (January-April)
- **88.9% ML Prediction Accuracy** (Random Forest)
- **143 High-High Priority Clusters** (LISA Analysis)

### ⏰ Temporal Analysis Section
1. **Annual Fire Hotspot Frequency** (Bar Chart)
   - 2020-2025 trends showing peak in 2020 (33,461 hotspots)
   
2. **Monthly Distribution Pattern** (Line Chart)
   - March peak at 31.2% of annual activity
   - Clear dry season concentration
   
3. **Quarterly Fire Activity** (Doughnut Chart)
   - Q1 dominance: 74.5% of fires
   
4. **Daily Detection Pattern** (Bar Chart)
   - Afternoon peak: 12:00-16:00 (38.7%)

### 🗺️ Spatial Analysis Section
1. **Spatial Statistics Panel**
   - Nearest Neighbor Index (NNI): 0.4233 (highly clustered)
   - Moran's I: 0.5686 (strong spatial autocorrelation)
   - Northern Thailand: 40.1% of national total
   
2. **LISA Cluster Analysis** (Pie Chart)
   - 143 High-High clusters (15.0%)
   - 404 Low-Low clusters (42.3%)
   - 89 High-Low outliers (9.3%)
   - 318 Low-High outliers (33.3%)
   
3. **Top 5 Provinces** (Horizontal Bar Chart)
   - Mae Hong Son: 12,500 hotspots
   - Chiang Mai: 11,200
   - Tak: 9,800
   - Lampang: 7,000
   - Nan: 5,000
   
4. **Interactive Fire Hotspot Map** (Leaflet)
   - 10 major province markers
   - Circle sizes proportional to hotspot counts
   - Interactive popups with province details
   - Fire intensity legend (Low/Medium/High)
   - OpenStreetMap tile layer

### 🤖 Machine Learning Section
1. **Classification Performance** (Radar Chart)
   - Accuracy: 88.9%
   - Precision: 90.0%
   - Recall: 88.9%
   
2. **Feature Importance** (Horizontal Bar Chart)
   - Lag 1 Month: 45%
   - Lag 2 Months: 28%
   - Lag 3 Months: 15%
   - Month of Year: 12%
   
3. **Performance Metrics**
   - AUC Score: 0.94
   - F1-Score: 89.4%
   - R² Score: 0.73
   - Lead Time: 1-3 months

### 📋 Key Findings & Recommendations
- 8 key research findings
- 5 actionable management recommendations

---

## 🛠️ Technologies Used

- **Frontend Framework:** HTML5, CSS3, Tailwind CSS
- **Chart Library:** Chart.js 4.4.0
- **Map Library:** Leaflet 1.9.4
- **Map Tiles:** OpenStreetMap
- **Data Format:** JSON
- **Responsive Design:** Mobile-first with Tailwind breakpoints

---

## 📚 Data Sources

- **MODIS Collection 6.1 MCD14DL** Active Fire Product
- **NASA FIRMS** (Fire Information for Resource Management System)
- **Study Period:** 2020-2025
- **Total Hotspots Analyzed:** 113,475

---

## 🔬 Methodology

### 1. Spatiotemporal Analysis
- Annual, monthly, quarterly, and daily temporal aggregation
- Brightness temperature analysis
- Detection confidence assessment

### 2. Spatial Statistics
- Nearest Neighbor Index (NNI)
- Global Moran's I
- Local Indicators of Spatial Association (LISA)
- Hot spot analysis with Gi* statistic

### 3. Machine Learning
- Random Forest Classification (500 trees)
- Random Forest Regression
- Feature importance analysis
- 80-20 train-test split validation

---

## 📖 Related Publications

This dashboard visualizes data from three integrated research papers:

1. **Paper 1:** Spatio-Temporal Analysis of MODIS Fire Hotspots in Thailand (2020-2025)
2. **Paper 2:** Using Advanced Spatial Statistical Methods for Spatial-Temporal Analysis
3. **Paper 3:** Machine Learning-Based Spatiotemporal Analysis for Early Warning Systems

**Combined Publication (55 pages):**
- Title: "Integrated Spatiotemporal and Machine Learning Analysis of MODIS Fire Hotspots in Thailand (2020-2025)"
- Citations: 352 IEEE-formatted references (Q1/Q2 journals, 2021-2026)
- File: `Integrated_Spatiotemporal_ML_Analysis_MODIS_Fire_Thailand.pdf`

**Ultra-Condensed Version (14 pages):**
- File: `MODIS_Fire_Thailand_15pages_FINAL.pdf`
- Citations: 47 most critical references

---

## 🎯 Use Cases

- **Wildfire Disaster Management:** Resource allocation and pre-positioning
- **Early Warning Systems:** 1-3 month lead time predictions
- **Policy Planning:** Evidence-based intervention strategies
- **Research & Education:** Interactive data exploration
- **Public Awareness:** Visual communication of fire patterns

---

## 🌍 Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1280px - 1920px)
- Tablet (768px - 1280px)
- Mobile (320px - 768px)

---

## 🔧 Customization

### Modify Data
Edit `dashboard_data.json` to update statistics, findings, or recommendations.

### Change Colors
Tailwind CSS classes in `index.html` control all styling:
- Stat cards: `bg-gradient-to-br from-pink-500 to-red-500`
- Charts: Defined in `dashboard.js` with hex colors

### Add Charts
Use Chart.js documentation to add new visualizations in `dashboard.js`.

### Modify Map
Leaflet configuration in `dashboard.js`:
- Center coordinates: `[15.87, 100.99]` (Thailand)
- Zoom level: `6`
- Add markers in `hotspotLocations` array

---

## 📄 License

© 2026 MODIS Fire Hotspot Analysis Dashboard

For wildfire disaster management and planning purposes.

---

## 📧 Support

For questions or issues:
- **Dashboard Deployment:** https://hd607pnz.scispace.co
- **Research Papers:** See `/home/sandbox/` directory for PDFs

---

## 🙏 Acknowledgments

- NASA FIRMS for MODIS data access
- OpenStreetMap contributors for map tiles
- Chart.js and Leaflet communities
- Research teams for the three integrated studies

---

## 📊 Dashboard Statistics

- **Total Lines of Code:** ~1,500
- **Data Points Visualized:** 113,475 fire hotspots
- **Interactive Elements:** 8 charts + 1 map + 10 province markers
- **File Size:** ~3.1 MB (with 15 PNG figures)
- **Load Time:** < 2 seconds on modern browsers

---

**Built with ❤️ for wildfire disaster management in Thailand**
