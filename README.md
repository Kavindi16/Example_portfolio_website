# 🌐 Portfolio Website - Full Deployment on IaaS (Ubuntu + Nginx)

This project is an example **personal portfolio website** designed and built using **React.js** and **Tailwind CSS**.  
It showcases skills, projects, and experiences as a developer.

Beyond just building the website, I **deployed** it manually on a **virtual private server (VPS)**, simulating a real-world **IaaS (Infrastructure as a Service)** setup, using **Linux (Ubuntu 24.04)** and **Nginx** as a production-grade web server.

---

## 📋 Project Overview

- **Frontend:** React.js (Vite as build tool), styled with Tailwind CSS.
- **Backend Server:** Nginx 
- **Hosting Environment:**  
  - Ubuntu 24.04 LTS Virtual Machine (Azure VM)
  - Manual configuration and deployment without using platforms like Vercel or Netlify.

- **Purpose:**  
  - Learn how real-world cloud deployment works.  
  - Understand Linux server management, Node.js installation, Nginx web server configuration.  
  - Practice full cycle from code to production server.

---

## 🚀 Project Steps

1. **Set Up Virtual Machine (VM)**  
   - Provision Ubuntu 24.04 VM on Azure.  
   - Configure networking and SSH access.
2. **Connect to VM**  
   ```bash
   ssh username@vm-public-ip
   ```
3. **Prepare the VM**  
   - Update packages: `sudo apt update && sudo apt upgrade -y`  
   - Install Nginx: `sudo apt install nginx -y`  
   - Install Node.js and npm from NodeSource.
4. **Clone and Build**  
   - Clone repo: `git clone https://github.com/kavindi16/portfolio-website.git`  
   - Install deps: `npm install`  
   - Build: `npm run build` → generates `dist/` folder.
5. **Deploy to Nginx**  
   - Copy build files: `sudo cp -r ~/portfolio-website/dist/* /var/www/html/`  
   - Configure Nginx server block.  
   - Test and reload Nginx.
6. **Verify Live Site**  
   - Visit `http://your-vm-public-ip` in a browser.

---

## 🔧 About Deployment

This section details the manual deployment workflow on IaaS:
- **SSH**: Secure access using public/private key pairs.  
- **Server Setup**: Package installation and service configuration.  
- **Application Deployment**: Building static assets and serving them via Nginx.  
- **Maintenance**: Restart, logs, and updates.

---

## ⭐ Key Features

- **Responsive Design**: Mobile-first layout with Tailwind CSS.  
- **Smooth Navigation**: Client-side routing support via Nginx `try_files`.  
- **Custom Scrollbars**: Branded scrollbar styling.  
- **Contact Form**: Placeholder form component in React.  
- **Project Showcase**: Dynamic project cards with hover effects.

---

## 🏗 About Infrastructure

- **Infrastructure as a Service (IaaS)**: Full control over the VM OS and software.  
- **Azure VM**: Virtual compute instance with public IP.  
- **Ubuntu Linux**: Secure and up-to-date server OS.  
- **Nginx**: High-performance web server for static content.

---

## 🖼️ Pictures


```

![Image Alt](https://github.com/Kavindi16/portfolio-website/blob/main/Capture.PNG?raw=true)




```

---

## 🔗 Links

- **Live Site**: `http://20.67.250.143`  
- **GitHub Repo**: https://github.com/Kavindi16/Example_portfolio_website
- **Video_Link**: https://youtu.be/jcyoaQV44BM

---

## 📝 Conclusion

This project demonstrated the end-to-end process of building a modern frontend application and deploying it on an IaaS platform. You now have a robust understanding of server management, deployment pipelines, and infrastructure configuration. Future improvements may include SSL setup with Let's Encrypt, custom domains, and CI/CD automation.


