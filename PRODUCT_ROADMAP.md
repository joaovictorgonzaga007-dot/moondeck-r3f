# Moondeck Vessel Customization Platform - Product Roadmap

**Version:** 1.0  
**Date:** January 4, 2026  
**Product:** EVA Flooring Customization Platform for Marine Vessels

---

## 🎯 Executive Summary

The Moondeck Vessel Customization Platform enables boat owners to visualize and customize EVA flooring for their vessels through an interactive 3D experience. This roadmap defines the MVP scope and a 3-sprint plan to take the platform from current state to production-ready with monetization capabilities.

**Current State:** Functional MVP with core features (3D viewer, customization, contact flow)  
**Target State:** Production platform with user accounts, quote generation, and admin management

---

## 1️⃣ MVP SCOPE DEFINITION

### ✅ MUST-HAVE (Core MVP - Already Built)

**Customer-Facing Features:**
- ✅ Vessel selection (4 types: yacht, sailboat, speedboat, catamaran)
- ✅ EVA flooring pattern selection (teak, diamond, herringbone, solid)
- ✅ Color customization (dual color picker)
- ✅ Line width adjustment
- ✅ Real-time 3D visualization with Three.js
- ✅ 360° rotation, zoom, pan controls
- ✅ Mobile-responsive design
- ✅ WhatsApp contact integration
- ✅ Contact form submission
- ✅ Customer reviews display
- ✅ AI chatbot assistance

**Technical Foundation:**
- ✅ React 18 + Vite frontend
- ✅ Node.js + Express backend
- ✅ MongoDB database
- ✅ Socket.io real-time features
- ✅ RESTful API architecture

### 🟡 SHOULD-HAVE (MVP Enhancement - Sprint 1-2)

**Customer Experience:**
- 🔲 User authentication (JWT-based)
- 🔲 Save configurations to account
- 🔲 Configuration history/favorites
- 🔲 Quote generation with pricing
- 🔲 Email notifications
- 🔲 PDF export of design
- 🔲 Share configuration via link

**Business Operations:**
- 🔲 Admin dashboard
- 🔲 Lead management system
- 🔲 Quote approval workflow
- 🔲 Inventory management (patterns/colors)
- 🔲 Analytics dashboard
- 🔲 Review moderation

**Technical:**
- 🔲 Input validation on all endpoints
- 🔲 Rate limiting
- 🔲 Error logging (Winston)
- 🔲 API documentation (Swagger)
- 🔲 Automated testing

### 🔴 WON'T-HAVE (Future Phases)

**Deferred to Post-MVP:**
- ❌ Payment processing (Stripe integration)
- ❌ E-commerce checkout flow
- ❌ Custom vessel model uploads
- ❌ AR/VR visualization (WebXR)
- ❌ Multi-language support (i18n)
- ❌ Advanced material customization (textures, finishes)
- ❌ Installation scheduling
- ❌ Installer network/marketplace
- ❌ Mobile native apps (iOS/Android)
- ❌ Social media integration
- ❌ Referral program
- ❌ Loyalty points system

---

## 2️⃣ USER FLOWS

### 👤 CUSTOMER JOURNEY

#### Flow 1: Browse & Explore (Anonymous)
```
1. Land on homepage
2. View featured vessels & reviews
3. Click "Start Customizing"
4. Browse vessel types
5. View 3D preview
6. Exit or continue to customize
```

#### Flow 2: Customize & Save (Registered User)
```
1. Select vessel type
2. Choose flooring pattern
3. Customize colors (color1, color2)
4. Adjust line width
5. Rotate/zoom 3D model
6. Click "Save Configuration"
   ├─ If not logged in → Prompt to sign up/login
   └─ If logged in → Save to account
7. View saved configurations in dashboard
8. Edit or duplicate existing designs
```

#### Flow 3: Request Quote
```
1. Complete customization
2. Click "Get Quote"
3. Review configuration summary
   - Vessel type & dimensions
   - Pattern & colors
   - Estimated square footage
4. Fill contact form (if not logged in)
5. Submit quote request
6. Receive confirmation email
7. Admin reviews and sends quote
8. Customer receives quote via email
9. Customer accepts/declines
   ├─ Accept → Proceed to payment (future)
   └─ Decline → Save for later or modify
```

#### Flow 4: Contact & Support
```
1. Click "Contact Us" or chat icon
2. Choose contact method:
   ├─ WhatsApp → Opens WhatsApp with pre-filled message
   ├─ Contact Form → Fill and submit
   └─ Chatbot → Ask questions, get instant answers
3. Receive confirmation
4. Admin responds within 24 hours
```

#### Flow 5: Leave Review
```
1. Navigate to reviews section
2. Click "Write a Review"
3. Fill review form:
   - Name, email
   - Rating (1-5 stars)
   - Review text
   - Vessel type (optional)
4. Submit review
5. Review pending admin approval
6. Once approved, appears on site
```

### 👨‍💼 ADMIN JOURNEY

#### Flow 1: Lead Management
```
1. Login to admin dashboard
2. View leads dashboard
   - New contacts (status: new)
   - In progress (status: contacted)
   - Resolved (status: resolved)
3. Click on lead to view details:
   - Customer info
   - Configuration details
   - 3D preview
   - Contact history
4. Update lead status
5. Send quote via email
6. Add notes/comments
7. Mark as resolved
```

#### Flow 2: Quote Generation
```
1. Access quote requests
2. Review configuration:
   - Vessel dimensions
   - Pattern complexity
   - Color selections
3. Calculate pricing:
   - Material cost
   - Labor cost
   - Shipping cost
   - Margin
4. Generate PDF quote
5. Send to customer via email
6. Track quote status (sent, viewed, accepted, declined)
```

#### Flow 3: Content Management
```
1. Manage vessels:
   ├─ Add new vessel type
   ├─ Edit vessel details
   ├─ Upload 3D models
   └─ Set availability
2. Manage patterns:
   ├─ Add new patterns
   ├─ Set pricing tiers
   └─ Mark as featured
3. Manage reviews:
   ├─ View pending reviews
   ├─ Approve/reject
   └─ Respond to reviews
```

#### Flow 4: Analytics & Reporting
```
1. View dashboard metrics:
   - Total configurations created
   - Quote requests (daily/weekly/monthly)
   - Conversion rate
   - Popular vessel types
   - Popular patterns
   - Average quote value
2. Export reports (CSV/PDF)
3. Filter by date range
4. View customer segments
```

---

## 3️⃣ DATA MODEL SUMMARY

### Core Entities

#### 1. **Vessel**
```javascript
{
  _id: ObjectId,
  name: String,              // "Luxury Yacht"
  type: Enum,                // yacht, sailboat, speedboat, catamaran
  description: String,
  dimensions: {
    length: Number,          // feet
    width: Number,           // feet
    height: Number           // feet
  },
  modelUrl: String,          // 3D model file path
  thumbnailUrl: String,      // Preview image
  createdAt: Date
}
```

#### 2. **FlooringConfig** (Customer Design)
```javascript
{
  _id: ObjectId,
  userId: String,            // Reference to User (future)
  vesselId: ObjectId,        // Reference to Vessel
  pattern: Enum,             // teak, diamond, herringbone, solid
  color1: String,            // Hex color (primary)
  color2: String,            // Hex color (secondary/lines)
  lineWidth: Number,         // 0.01 - 0.05
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. **Contact** (Lead)
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  status: Enum,              // new, contacted, resolved
  createdAt: Date
}
```

#### 4. **Review**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  rating: Number,            // 1-5
  text: String,
  vesselType: String,
  approved: Boolean,         // Default: false
  createdAt: Date
}
```

### New Entities (Sprint 1-2)

#### 5. **User** (Authentication)
```javascript
{
  _id: ObjectId,
  email: String,             // Unique, required
  password: String,          // Hashed with bcrypt
  firstName: String,
  lastName: String,
  phone: String,
  role: Enum,                // customer, admin
  savedConfigs: [ObjectId],  // References to FlooringConfig
  createdAt: Date,
  lastLogin: Date
}
```

#### 6. **Quote**
```javascript
{
  _id: ObjectId,
  userId: ObjectId,          // Reference to User
  configId: ObjectId,        // Reference to FlooringConfig
  vesselId: ObjectId,        // Reference to Vessel
  pricing: {
    materialCost: Number,
    laborCost: Number,
    shippingCost: Number,
    tax: Number,
    total: Number
  },
  status: Enum,              // pending, sent, viewed, accepted, declined
  validUntil: Date,
  notes: String,
  createdAt: Date,
  sentAt: Date,
  viewedAt: Date,
  respondedAt: Date
}
```

#### 7. **Pattern** (Inventory)
```javascript
{
  _id: ObjectId,
  name: String,              // "Teak Classic"
  code: String,              // "teak"
  description: String,
  pricePerSqFt: Number,
  available: Boolean,
  featured: Boolean,
  imageUrl: String,
  createdAt: Date
}
```

### Relationships

```
User (1) ──── (N) FlooringConfig
User (1) ──── (N) Quote
FlooringConfig (N) ──── (1) Vessel
Quote (1) ──── (1) FlooringConfig
Quote (1) ──── (1) Vessel
Contact (1) ──── (0..1) User (optional link)
Review (1) ──── (0..1) User (optional link)
```

---

## 4️⃣ SPRINT PLAN

### 🏃 SPRINT 1: Critical Path (2 weeks)
**Goal:** Production-ready foundation with authentication and core business logic

#### Week 1: Authentication & User Management
**Backend:**
- [ ] Implement User model with password hashing
- [ ] Create auth routes (register, login, logout, refresh token)
- [ ] Add JWT middleware for protected routes
- [ ] Implement password reset flow
- [ ] Add email service (SendGrid/Nodemailer)

**Frontend:**
- [ ] Create login/register pages
- [ ] Add auth context/state management
- [ ] Implement protected routes
- [ ] Add user dashboard page
- [ ] Create profile management UI

**Testing:**
- [ ] Unit tests for auth endpoints
- [ ] Integration tests for login flow
- [ ] Security testing (JWT validation)

**Deliverables:**
- ✅ Users can register and login
- ✅ JWT tokens secure API endpoints
- ✅ Password reset via email works
- ✅ User dashboard displays saved configs

#### Week 2: Save Configurations & Quote System
**Backend:**
- [ ] Link FlooringConfig to User
- [ ] Create Quote model and routes
- [ ] Implement quote generation logic
- [ ] Add pricing calculation service
- [ ] Create email templates for quotes

**Frontend:**
- [ ] Add "Save Configuration" button
- [ ] Create saved configs gallery
- [ ] Build quote request form
- [ ] Add quote history view
- [ ] Implement PDF export (jsPDF)

**Testing:**
- [ ] Test save/load configurations
- [ ] Validate quote calculations
- [ ] Test email delivery

**Deliverables:**
- ✅ Logged-in users can save unlimited configs
- ✅ Users can request quotes
- ✅ Quote requests create leads for admin
- ✅ Customers receive quote confirmation email

**Sprint 1 Success Metrics:**
- 100% of API endpoints require authentication
- Users can save and retrieve configurations
- Quote request flow is functional
- Zero critical security vulnerabilities

---

### 💰 SPRINT 2: Monetization & Reliability (2 weeks)
**Goal:** Admin tools for lead management and business operations

#### Week 1: Admin Dashboard
**Backend:**
- [ ] Create admin-only routes (role-based access)
- [ ] Build analytics aggregation queries
- [ ] Add lead management endpoints
- [ ] Implement quote approval workflow
- [ ] Create admin notification system

**Frontend:**
- [ ] Build admin dashboard layout
- [ ] Create leads management table
- [ ] Add quote generation interface
- [ ] Build analytics charts (Chart.js)
- [ ] Implement review moderation UI

**Testing:**
- [ ] Test role-based access control
- [ ] Validate admin permissions
- [ ] Test analytics calculations

**Deliverables:**
- ✅ Admin dashboard with key metrics
- ✅ Lead management system
- ✅ Quote generation and approval
- ✅ Review moderation interface

#### Week 2: Reliability & Monitoring
**Backend:**
- [ ] Add input validation (express-validator)
- [ ] Implement rate limiting (express-rate-limit)
- [ ] Add error logging (Winston)
- [ ] Set up health check endpoints
- [ ] Implement database backups

**Frontend:**
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add offline detection
- [ ] Create error pages (404, 500)
- [ ] Add analytics tracking (Google Analytics)

**DevOps:**
- [ ] Set up CI/CD pipeline (GitHub Actions)
- [ ] Configure production environment
- [ ] Set up monitoring (Sentry/LogRocket)
- [ ] Implement automated backups
- [ ] Create deployment documentation

**Testing:**
- [ ] Load testing (Artillery/k6)
- [ ] Security audit (npm audit)
- [ ] Penetration testing
- [ ] Cross-browser testing

**Deliverables:**
- ✅ All endpoints have input validation
- ✅ Rate limiting prevents abuse
- ✅ Error logging captures issues
- ✅ Monitoring alerts on failures
- ✅ Automated deployment pipeline

**Sprint 2 Success Metrics:**
- Admin can manage 100+ leads efficiently
- Quote generation takes < 2 minutes
- 99.9% uptime
- < 2 second page load time
- Zero data loss incidents

---

### 📈 SPRINT 3: Scale & UX Improvements (2 weeks)
**Goal:** Enhanced user experience and scalability features

#### Week 1: Advanced Features
**Backend:**
- [ ] Implement configuration sharing (public links)
- [ ] Add configuration duplication
- [ ] Create favorites/bookmarks system
- [ ] Build email notification preferences
- [ ] Add search and filtering for configs

**Frontend:**
- [ ] Add configuration comparison view
- [ ] Implement drag-and-drop reordering
- [ ] Create onboarding tutorial
- [ ] Add keyboard shortcuts
- [ ] Build advanced 3D controls (lighting, shadows)

**UX Improvements:**
- [ ] Add loading skeletons
- [ ] Implement optimistic UI updates
- [ ] Add micro-interactions
- [ ] Improve mobile touch gestures
- [ ] Add accessibility features (ARIA labels)

**Deliverables:**
- ✅ Users can share configs via link
- ✅ Duplicate and modify existing designs
- ✅ Improved 3D visualization quality
- ✅ Better mobile experience

#### Week 2: Performance & Polish
**Backend:**
- [ ] Implement caching (Redis)
- [ ] Optimize database queries (indexes)
- [ ] Add CDN for static assets
- [ ] Implement lazy loading for 3D models
- [ ] Optimize image delivery (WebP)

**Frontend:**
- [ ] Code splitting and lazy loading
- [ ] Optimize bundle size
- [ ] Implement service worker (PWA)
- [ ] Add image optimization
- [ ] Improve 3D rendering performance

**Content:**
- [ ] Add help documentation
- [ ] Create video tutorials
- [ ] Build FAQ section
- [ ] Add tooltips and hints
- [ ] Create email templates

**Testing:**
- [ ] Performance testing (Lighthouse)
- [ ] Accessibility audit (WAVE)
- [ ] User acceptance testing
- [ ] A/B testing setup

**Deliverables:**
- ✅ Lighthouse score > 90
- ✅ 3D models load in < 3 seconds
- ✅ PWA installable on mobile
- ✅ Comprehensive help documentation
- ✅ Accessibility score > 95

**Sprint 3 Success Metrics:**
- Page load time < 1.5 seconds
- 3D viewer FPS > 60
- Mobile conversion rate +20%
- User satisfaction score > 4.5/5
- Support ticket volume -30%

---

## 5️⃣ RISKS & ASSUMPTIONS

### 🔴 HIGH RISKS

#### Risk 1: 3D Model Performance on Mobile
**Impact:** High | **Probability:** Medium
- **Description:** Three.js 3D rendering may be slow on older mobile devices
- **Mitigation:**
  - Implement progressive loading (low-res → high-res)
  - Add quality settings (low/medium/high)
  - Provide 2D fallback for unsupported devices
  - Optimize 3D models (reduce polygon count)
- **Contingency:** Offer static image previews with "View in 3D" option

#### Risk 2: Quote Accuracy & Pricing
**Impact:** High | **Probability:** Medium
- **Description:** Automated pricing may not account for all variables
- **Mitigation:**
  - Start with manual quote review (admin approval)
  - Build pricing rules engine incrementally
  - Add admin override capability
  - Collect historical data to improve accuracy
- **Contingency:** All quotes require admin review before sending

#### Risk 3: User Adoption & Retention
**Impact:** High | **Probability:** Medium
- **Description:** Users may not return to complete purchases
- **Mitigation:**
  - Implement email reminders for saved configs
  - Add limited-time quote validity
  - Create urgency with seasonal promotions
  - Simplify quote request process
- **Contingency:** Offer phone consultation for high-value leads

### 🟡 MEDIUM RISKS

#### Risk 4: MongoDB Scaling
**Impact:** Medium | **Probability:** Low
- **Description:** Database may slow down with large datasets
- **Mitigation:**
  - Implement proper indexing from start
  - Use MongoDB Atlas auto-scaling
  - Archive old configurations
  - Implement caching layer (Redis)
- **Contingency:** Migrate to sharded cluster if needed

#### Risk 5: Email Deliverability
**Impact:** Medium | **Probability:** Medium
- **Description:** Quote emails may land in spam
- **Mitigation:**
  - Use reputable email service (SendGrid)
  - Implement SPF, DKIM, DMARC
  - Warm up email domain gradually
  - Add "Add to contacts" instructions
- **Contingency:** SMS notifications as backup

#### Risk 6: Browser Compatibility
**Impact:** Medium | **Probability:** Low
- **Description:** WebGL may not work on all browsers
- **Mitigation:**
  - Test on all major browsers
  - Detect WebGL support on load
  - Provide graceful degradation
  - Show browser upgrade message
- **Contingency:** Static image gallery for unsupported browsers

### 🟢 LOW RISKS

#### Risk 7: Third-Party Dependencies
**Impact:** Low | **Probability:** Low
- **Description:** npm packages may have vulnerabilities
- **Mitigation:**
  - Run npm audit regularly
  - Use Dependabot for updates
  - Pin critical dependency versions
  - Review security advisories
- **Contingency:** Fork and maintain critical packages

#### Risk 8: Data Loss
**Impact:** High | **Probability:** Very Low
- **Description:** Database corruption or accidental deletion
- **Mitigation:**
  - Automated daily backups
  - Point-in-time recovery enabled
  - Test restore procedures monthly
  - Implement soft deletes
- **Contingency:** Restore from backup (< 24hr data loss)

---

### 📋 KEY ASSUMPTIONS

#### Business Assumptions
1. **Target Market:** Boat owners willing to invest $2,000+ in flooring
2. **Sales Cycle:** 2-4 weeks from quote to purchase decision
3. **Conversion Rate:** 5-10% of quote requests convert to sales
4. **Average Order Value:** $5,000 - $15,000 per vessel
5. **Customer Acquisition:** Primarily organic search and referrals

#### Technical Assumptions
1. **User Devices:** 60% mobile, 40% desktop
2. **Browser Support:** Chrome, Safari, Firefox, Edge (latest 2 versions)
3. **Internet Speed:** Minimum 3G connection for 3D viewer
4. **MongoDB:** Can handle 100,000+ configurations
5. **Concurrent Users:** Peak of 100 simultaneous users

#### Operational Assumptions
1. **Admin Capacity:** 1 admin can handle 50 quotes/week
2. **Response Time:** Quotes sent within 24 hours
3. **Support Hours:** Business hours (9am-5pm EST)
4. **Inventory:** All patterns available year-round
5. **Shipping:** Nationwide shipping available

#### User Behavior Assumptions
1. **Session Duration:** Average 10-15 minutes per customization
2. **Configurations per User:** 2-3 designs before requesting quote
3. **Return Rate:** 30% of users return to modify designs
4. **Mobile Usage:** 70% browse on mobile, 50% complete on desktop
5. **Social Sharing:** 10% of users share their designs

---

## 📊 SUCCESS METRICS

### Sprint 1 KPIs
- [ ] 100% API endpoints authenticated
- [ ] < 2 second login response time
- [ ] 95% email delivery rate
- [ ] Zero critical security vulnerabilities
- [ ] 100% test coverage on auth flows

### Sprint 2 KPIs
- [ ] Admin can process 10 quotes/hour
- [ ] 99.9% uptime
- [ ] < 500ms API response time (p95)
- [ ] < 5% error rate
- [ ] 100% of leads captured in system

### Sprint 3 KPIs
- [ ] Lighthouse score > 90
- [ ] 60 FPS 3D rendering
- [ ] < 1.5 second page load
- [ ] 95+ accessibility score
- [ ] 20% increase in mobile conversions

### Overall Product KPIs (Post-Launch)
- **Acquisition:** 1,000 unique visitors/month
- **Activation:** 30% create a configuration
- **Retention:** 20% return within 30 days
- **Revenue:** 5% quote-to-sale conversion
- **Referral:** 10% share their design

---

## 🚀 LAUNCH READINESS CHECKLIST

### Pre-Launch (Before Sprint 1)
- [ ] Domain purchased and DNS configured
- [ ] SSL certificate installed
- [ ] Production database provisioned
- [ ] Email service configured
- [ ] Analytics tracking installed

### Post-Sprint 1
- [ ] User authentication tested
- [ ] Password reset flow verified
- [ ] Email notifications working
- [ ] Security audit passed
- [ ] Privacy policy published

### Post-Sprint 2
- [ ] Admin dashboard functional
- [ ] Quote generation tested
- [ ] Monitoring alerts configured
- [ ] Backup/restore tested
- [ ] Load testing completed

### Post-Sprint 3
- [ ] Performance optimized
- [ ] Help documentation complete
- [ ] User acceptance testing passed
- [ ] Cross-browser testing done
- [ ] Accessibility audit passed

### Launch Day
- [ ] Final smoke tests passed
- [ ] Support team trained
- [ ] Marketing materials ready
- [ ] Social media announced
- [ ] Monitoring dashboards active

---

## 📅 TIMELINE SUMMARY

| Phase | Duration | Dates | Deliverables |
|-------|----------|-------|--------------|
| **Current State** | - | Jan 1, 2026 | Functional MVP with 3D customization |
| **Sprint 1** | 2 weeks | Jan 6 - Jan 17 | Authentication, Save Configs, Quotes |
| **Sprint 2** | 2 weeks | Jan 20 - Jan 31 | Admin Dashboard, Reliability |
| **Sprint 3** | 2 weeks | Feb 3 - Feb 14 | Performance, UX Polish |
| **Launch** | - | Feb 17, 2026 | Public production launch |

**Total Development Time:** 6 weeks  
**Launch Target:** February 17, 2026

---

## 🎯 POST-LAUNCH ROADMAP (Future Phases)

### Phase 2: E-Commerce (Q2 2026)
- Payment processing (Stripe)
- Shopping cart and checkout
- Order management system
- Shipping integration
- Invoice generation

### Phase 3: Advanced Customization (Q3 2026)
- Custom vessel model uploads
- Advanced material options
- Texture and finish selection
- Installation visualization
- AR preview (mobile)

### Phase 4: Marketplace (Q4 2026)
- Installer network
- Installation scheduling
- Installer ratings/reviews
- Multi-vendor support
- Commission management

### Phase 5: Enterprise (2027)
- White-label solution
- API for partners
- Bulk ordering
- Fleet management
- Custom integrations

---

**Document Version:** 1.0  
**Last Updated:** January 4, 2026  
**Next Review:** End of Sprint 1 (January 17, 2026)
