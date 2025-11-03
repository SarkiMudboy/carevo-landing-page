# Carevo - Your WhatsApp Health Assistant

A voice-based health chatbot designed to deliver life-saving health education through WhatsApp, breaking barriers of literacy and accessibility in underserved African communities.

## Features

- **Voice-First Design** - Audio messages bypass literacy barriers, making health information accessible to everyone
- **WhatsApp Integration** - Reach users where they already are. No app downloads needed, just WhatsApp
- **Culturally Relevant** - Health guidance tailored to African communities, covering hygiene, disease prevention, and childcare
- **Privacy First** - We never store personal data. Phone numbers are hashed and protected
- **Open Source** - Built for NGOs, health ministries, and community organizations. Scalable and replicable
- **Always Available** - Get instant health guidance 24/7 without waiting for an appointment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19 with shadcn/ui components
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Health Topics Covered

- Hygiene & Sanitation
- Malaria Prevention
- Breastfeeding
- Childcare
- Maternal Health
- Disease Prevention

## Getting Started

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- npm or yarn (comes with Node.js)

### Installation

**Option 1: Download & Install**

1. Download the project ZIP from v0
2. Extract it to your desired location
3. Navigate to the project directory:
   \`\`\`bash
   cd carevo-landing-page
   \`\`\`
4. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

**Option 2: Clone from GitHub**

\`\`\`bash
git clone https://github.com/your-username/carevo-landing-page.git
cd carevo-landing-page
npm install
\`\`\`

### Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you make changes.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
.
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles & Tailwind config
├── components/
│   └── ui/               # shadcn/ui components
├── public/
│   └── images/           # Logo and assets
├── README.md             # This file
└── package.json
\`\`\`

## Customization

### Update WhatsApp Number

Edit the `handleWhatsAppClick` function in `app/page.tsx`:

\`\`\`tsx
const handleWhatsAppClick = () => {
  window.open("https://wa.me/YOUR_PHONE_NUMBER?text=Hi%20Carevo", "_blank")
}
\`\`\`

Replace `YOUR_PHONE_NUMBER` with your actual WhatsApp number (use international format without `+`).

### Change Brand Colors

The primary brand color is `#009057`. To change it:

1. Search for `#009057` in `app/page.tsx`
2. Replace with your desired color hex code
3. Update design tokens in `app/globals.css` if needed

### Dark Mode

The landing page includes built-in dark mode toggle with localStorage persistence and system preference detection.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

\`\`\`bash
vercel deploy
\`\`\`

### Deploy to Other Platforms

The project works with any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## About

**Carevo** is an open-source initiative by **TernTribe** to democratize access to essential health services through technology. Our mission is to empower millions with accurate, culturally relevant health guidance that saves lives.

## License

[Choose your license - MIT, GPL, Apache 2.0, etc.]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue on GitHub or contact TernTribe.

## Related Links

- [TernTribe Website](https://terntribe.com)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)
- [Next.js Documentation](https://nextjs.org/docs)

---

Made with ❤️ for underserved communities
