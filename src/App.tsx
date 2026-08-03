import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import ServiceAreas from "./pages/ServiceAreas.tsx";
import Residential from "./pages/Residential.tsx";
import Commercial from "./pages/Commercial.tsx";
import Packing from "./pages/Packing.tsx";
import Specialty from "./pages/Specialty.tsx";
import LongDistance from "./pages/LongDistance.tsx";
import Gallery from "./pages/Gallery.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import FAQs from "./pages/FAQs.tsx";
import Career from "./pages/Career.tsx";
import Contact from "./pages/Contact.tsx";
import GetQuote from "./pages/GetQuote.tsx";
import Privacy from "./pages/Privacy.tsx";
import AdminInbox from "./pages/AdminInbox.tsx";
import AdminSMS from "./pages/AdminSMS.tsx";
import AdminInvoices from "./pages/AdminInvoices.tsx";
import AdminInvoiceNew from "./pages/AdminInvoiceNew.tsx";
import PublicInvoice from "./pages/PublicInvoice.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/packing" element={<Packing />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/long-distance" element={<LongDistance />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/get-a-quote" element={<GetQuote />} />
          <Route path="/quote" element={<Navigate to="/get-a-quote" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/weddings" element={<Navigate to="/residential" replace />} />
          <Route path="/events" element={<Navigate to="/commercial" replace />} />
          <Route path="/construction" element={<Navigate to="/packing" replace />} />
          <Route path="/pricing" element={<Navigate to="/get-a-quote" replace />} />
          <Route path="/admin" element={<Navigate to="/admin/inbox" replace />} />
          <Route path="/admin/inbox" element={<AdminInbox />} />
          <Route path="/admin/sms" element={<AdminSMS />} />
          <Route path="/admin/invoices" element={<AdminInvoices />} />
          <Route path="/admin/invoices/new" element={<AdminInvoiceNew />} />
          <Route path="/i/:token" element={<PublicInvoice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
