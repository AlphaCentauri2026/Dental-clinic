# BrightSmile Dental Clinic Website

A modern, responsive dental clinic website built with Next.js 15, TypeScript, and Tailwind CSS. Features professional animations, optimized images, and a complete dental practice management interface.

## 🚀 Features

- **Modern Design**: Clean, professional dental clinic aesthetic
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Next.js Image optimization with proper sizing
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Ready**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety and IntelliSense support
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Heroicons (SVG)
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── staff/             # Staff page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── About.tsx          # About section
│   ├── Appointments.tsx   # Appointment booking
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Navigation.tsx     # Main navigation
│   ├── Resources.tsx      # Patient resources
│   ├── Services.tsx       # Services section
│   ├── Staff.tsx          # Staff section
│   └── Testimonials.tsx   # Patient testimonials
└── data/                  # Static data
    ├── clinic.json        # Clinic information
    ├── services.json      # Dental services
    ├── staff.json         # Staff details
    └── testimonials.json  # Patient reviews
```

## 🏥 Pages

- **Homepage** (`/`): Hero, services overview, staff preview, testimonials
- **About** (`/about`): Clinic history, values, team timeline
- **Services** (`/services`): Detailed service descriptions
- **Staff** (`/staff`): Individual staff profiles with photos
- **Contact** (`/contact`): Contact form, office hours, interactive map

## 🎨 Customization

### Clinic Information
Edit `src/data/clinic.json` to customize:
- Clinic name and tagline
- Contact information
- Office hours
- Social media links

### Services
Edit `src/data/services.json` to customize:
- Service names and descriptions
- Available treatments

### Staff
Edit `src/data/staff.json` and update images in `public/dental website assets/`:
- Staff names, roles, and bios
- Professional headshots

### Styling
- Colors: Modify Tailwind classes in components
- Layout: Adjust responsive breakpoints
- Animations: Customize Framer Motion settings

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clinic-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Lazy Loading**: Images load as they enter viewport
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Optimized chunk sizes
- **Core Web Vitals**: Optimized for speed and UX

## 🔧 Configuration

### Environment Variables
Create `.env.local` for custom configurations:
```env
NEXT_PUBLIC_CLINIC_NAME=Your Clinic Name
NEXT_PUBLIC_CONTACT_EMAIL=contact@yourclinic.com
```

### Next.js Config
Edit `next.config.ts` for advanced configurations:
```typescript
const nextConfig: NextConfig = {
  // Custom configurations here
};

export default nextConfig;
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Custom breakpoints for tablets
- **Desktop Enhancement**: Full-width layouts on large screens
- **Touch Friendly**: Proper touch targets and gestures

## 🔒 Security & Best Practices

- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint with Next.js rules
- **Performance**: Optimized bundle sizes
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO**: Proper meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Railway**: Deploy from GitHub
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ for dental practices everywhere**
