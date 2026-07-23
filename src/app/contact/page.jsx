// "use client";

// import { useState } from "react";
// import styled from "styled-components";
// import Swal from "sweetalert2";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [activeFaq, setActiveFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     Swal.fire({ text: "Sending message..." });
//     Swal.showLoading();

//     const payload = {
//       ...formData,
//       recipientEmail: "husandoval1517@gmail.com",
//       websiteName: "El Paso Water Quality Inspection",
//     };

//     try {
//       const response = await fetch(
//         "https://backend-mailer-1.vercel.app/api/contact",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         Swal.fire({
//           icon: "success",
//           text: "Sent successfully, we shall get back to you. Thanks.",
//         });

//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         Swal.fire({ icon: "error", text: data.error || "Something went wrong" });
//       }
//     } catch (error) {
//       Swal.fire({ icon: "error", text: "Network error. Try again." });
//     }
//   };

//   const faqs = [
//     {
//       question: "What does the free water inspection cover?",
//       answer: "Our basic on-site inspection checks for common residential parameters including hard water minerals, dissolved solids, chlorine levels, and visual heavy metal precursors using professional testing instrumentation.",
//     },
//     {
//       question: "How long does the testing process take?",
//       answer: "The evaluation takes about 30 minutes. Our technician tests your water on-site, presents the parameters immediately, and answers any household questions.",
//     },
//     {
//       question: "Are your laboratory validation methods safe?",
//       answer: "Yes, all professional parameters are mapped out utilizing standard testing protocols designed to identify home and community contaminants accurately.",
//     },
//     {
//       question: "Which regions of El Paso do you serve?",
//       answer: "We cover all major residential zones including West El Paso, East El Paso, Northeast El Paso, Central El Paso, and surrounding neighborhood communities.",
//     },
//   ];

//   return (
//     <PageWrapper>
//       {/* SPLIT LAYOUT HERO AND CONTACT SECTION */}
//       <MainContactSection>
//         <Container>
//           {/* Left Panel: High contrast dark background container matching split reference image */}
//           <InfoSide>
//             <MainTitle>
//               Schedule Your Free<br />
//               Water Inspection
//             </MainTitle>
//             <BulletList>
//               <BulletItem>
//                 <CheckIconWrapper>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </CheckIconWrapper>
//                 Takes about 30 minutes
//               </BulletItem>
//               <BulletItem>
//                 <CheckIconWrapper>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </CheckIconWrapper>
//                 100% free, no obligation
//               </BulletItem>
//               <BulletItem>
//                 <CheckIconWrapper>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </CheckIconWrapper>
//                 Get answers you can trust
//               </BulletItem>
//             </BulletList>

//             <CompanyMetaGrid>
//               <MetaCard>
//                 <h4>📍 Address:</h4>
//                 <p>5823 N Mesa St, El Paso 79912 Texas</p>
//               </MetaCard>
//               <MetaCard>
//                 <h4>📞 Contact Helpline</h4>
//                 <p>+1 915 987 2546</p>
//               </MetaCard>
//             </CompanyMetaGrid>
//           </InfoSide>

//           {/* Right Panel: Crisp White Form Card Block */}
//           <FormCard>
//             <h2 style={{textAlign:"center", marginBottom:"10px"}}>Contact Us</h2>
//             <StyledForm onSubmit={handleSubmit}>
//               <FormRow>
//                 <Input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <Input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </FormRow>

//               <p>
//                 By submitting your phone number, you agree to receive SMS text appointment reminders from El Paso Water Quality. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our Privacy Policy and Terms & Conditions.
//               </p>

//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//               <TextArea
//                 name="message"
//                 placeholder="Your Message / Specific Water Concerns (Optional)"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />

//               <Button type="submit">Submit</Button>
//             </StyledForm>
//           </FormCard>
//         </Container>
//       </MainContactSection>

//       {/* LIGHT ACCORDION FAQ SECTION */}
//       <FAQSection>
//         <FAQTitle>Frequently Asked Questions</FAQTitle>
//         <FAQAccordionContainer>
//           {faqs.map((faq, index) => {
//             const isOpen = activeFaq === index;
//             return (
//               <AccordionItem key={index} $isOpen={isOpen}>
//                 <AccordionHeader onClick={() => toggleFaq(index)}>
//                   <h3>{faq.question}</h3>
//                   <span className="icon">{isOpen ? "−" : "+"}</span>
//                 </AccordionHeader>
//                 <AccordionContent $isOpen={isOpen}>
//                   <div className="inner-content">
//                     <p>{faq.answer}</p>
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             );
//           })}
//         </FAQAccordionContainer>
//       </FAQSection>
//     </PageWrapper>
//   );
// }

// // --- Styled Components Definition ---

// const PageWrapper = styled.div`
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//   color: #1a202c;
//   background-color: #f8f9fa; /* Changed to off-white light background */
//   margin-top:50px;
// `;

// const MainContactSection = styled.section`
//   width: 100%;
//   padding: 100px 40px;
//   background-color: #ffffff; /* Clean light section background */
//   display: flex;
//   justify-content: center;
//   border-bottom: 1px solid #edf2f7;

//   @media (max-width: 900px) {
//     padding: 60px 20px;
//   }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1.1fr 1.3fr;
//   gap: 60px;
//   align-items: center;

//   @media (max-width: 900px) {
//     grid-template-columns: 1fr;
//     gap: 48px;
//   }
// `;

// const InfoSide = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #030b14; /* Kept signature deep navy tone for split section accent */
//   padding: 48px;
//   border-radius: 12px;
//   box-shadow: 0 10px 30px rgba(3, 11, 20, 0.1);

//   @media (max-width: 640px) {
//     padding: 32px 24px;
//   }
// `;

// const MainTitle = styled.h1`
//   font-size: 2.6rem;
//   font-weight: 700;
//   line-height: 1.2;
//   margin: 0 0 32px 0;
//   letter-spacing: -0.5px;
//   color: #ffffff;

//   @media (max-width: 640px) {
//     font-size: 2.1rem;
//   }
// `;

// const BulletList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0 0 48px 0;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const BulletItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   font-size: 1.1rem;
//   color: #cbd5e1;
// `;

// const CheckIconWrapper = styled.span`
//   color: #ffffff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;

//   svg {
//     width: 18px;
//     height: 18px;
//   }
// `;

// const CompanyMetaGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 24px;
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
//   padding-top: 32px;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MetaCard = styled.div`
//   h4 {
//     margin: 0 0 8px 0;
//     font-size: 0.95rem;
//     color: #94a3b8;
//   }
//   p {
//     margin: 0;
//     font-size: 0.9rem;
//     line-height: 1.5;
//     color: #e2e8f0;
//   }
// `;

// const FormCard = styled.div`
//   background: #ffffff;
//   border-radius: 12px;
//   padding: 44px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//   border: 1px solid #e2e8f0;

//   @media (max-width: 500px) {
//     padding: 24px 20px;
//   }
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 18px;
// `;

// const FormRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 18px;

//   @media (max-width: 500px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 14px 18px;
//   border: 1px solid #cbd5e1;
//   border-radius: 8px;
//   font-size: 1rem;
//   background-color: #f8fafc;
//   color: #0f172a;
//   transition: all 0.2s ease;

//   &::placeholder {
//     color: #94a3b8;
//   }

//   &:focus {
//     outline: none;
//     border-color: #1d4ed8;
//     background-color: #ffffff;
//     box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.15);
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 14px 18px;
//   height: 130px;
//   border: 1px solid #cbd5e1;
//   border-radius: 8px;
//   font-size: 1rem;
//   background-color: #f8fafc;
//   color: #0f172a;
//   outline: none;
//   resize: none;
//   transition: all 0.2s ease;

//   &::placeholder {
//     color: #94a3b8;
//   }

//   &:focus {
//     outline: none;
//     border-color: #1d4ed8;
//     background-color: #ffffff;
//     box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.15);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 16px;
//   background-color: #1d4ed8;
//   color: #ffffff;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: background-color 0.2s ease;
//   margin-top: 6px;

//   &:hover {
//     background-color: #1e40af;
//   }
// `;

// const FAQSection = styled.section`
//   max-width: 840px;
//   width: 100%;
//   margin: 0 auto;
//   padding: 100px 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FAQTitle = styled.h2`
//   font-size: 2.2rem;
//   font-weight: 700;
//   color: #1a202c; /* Clear text color for light theme */
//   margin-bottom: 48px;
//   text-align: center;
// `;

// const FAQAccordionContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const AccordionItem = styled.div`
//   background: #ffffff;
//   border: 1px solid ${(props) => (props.$isOpen ? "#1d4ed8" : "#e2e8f0")};
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
//   transition: all 0.2s ease;
// `;

// const AccordionHeader = styled.div`
//   padding: 24px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   cursor: pointer;
//   user-select: none;

//   h3 {
//     margin: 0;
//     font-size: 1.1rem;
//     font-weight: 600;
//     color: #1a202c;
//     padding-right: 16px;
//   }

//   .icon {
//     font-size: 1.5rem;
//     color: #4a5568;
//     font-weight: 400;
//     line-height: 1;
//   }
// `;

// const AccordionContent = styled.div`
//   max-height: ${(props) => (props.$isOpen ? "200px" : "0")};
//   overflow: hidden;
//   transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);

//   .inner-content {
//     padding: 0 24px 24px 24px;
//     border-top: ${(props) => (props.$isOpen ? "1px solid #f7fafc" : "none")};
//   }

//   p {
//     margin: 0;
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #4a5568;
//   }
// `;



"use client";

import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      Swal.fire({
        icon: "warning",
        text: "Please check 'I agree' to the consent terms before submitting.",
      });
      return;
    }

    Swal.fire({ text: "Sending message..." });
    Swal.showLoading();

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      recipientEmail: "husandoval1517@gmail.com",
      websiteName: "El Paso Water Quality Inspection",
    };

    try {
      const response = await fetch(
        "https://backend-mailer-1.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          text: "Sent successfully, we shall get back to you. Thanks.",
        });

        setFormData({ name: "", email: "", phone: "", message: "", agreed: false });
      } else {
        Swal.fire({ icon: "error", text: data.error || "Something went wrong" });
      }
    } catch (error) {
      Swal.fire({ icon: "error", text: "Network error. Try again." });
    }
  };

  const faqs = [
    {
      question: "What does the free water inspection cover?",
      answer: "Our basic on-site inspection checks for common residential parameters including hard water minerals, dissolved solids, chlorine levels, and visual heavy metal precursors using professional testing instrumentation.",
    },
    {
      question: "How long does the testing process take?",
      answer: "The evaluation takes about 30 minutes. Our technician tests your water on-site, presents the parameters immediately, and answers any household questions.",
    },
    {
      question: "Are your laboratory validation methods safe?",
      answer: "Yes, all professional parameters are mapped out utilizing standard testing protocols designed to identify home and community contaminants accurately.",
    },
    {
      question: "Which regions of El Paso do you serve?",
      answer: "We cover all major residential zones including West El Paso, East El Paso, Northeast El Paso, Central El Paso, and surrounding neighborhood communities.",
    },
  ];

  return (
    <PageWrapper>
      {/* SPLIT LAYOUT HERO AND CONTACT SECTION */}
      <MainContactSection>
        <Container>
          {/* Left Panel: High contrast dark background container matching split reference image */}
          <InfoSide>
            <MainTitle>
              Schedule Your Free<br />
              Water Inspection
            </MainTitle>
            <BulletList>
              <BulletItem>
                <CheckIconWrapper>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </CheckIconWrapper>
                Takes about 30 minutes
              </BulletItem>
              <BulletItem>
                <CheckIconWrapper>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </CheckIconWrapper>
                100% free, no obligation
              </BulletItem>
              <BulletItem>
                <CheckIconWrapper>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </CheckIconWrapper>
                Get answers you can trust
              </BulletItem>
            </BulletList>

            <CompanyMetaGrid>
              <MetaCard>
                <h4>📍 Address:</h4>
                <p>5823 N Mesa St, El Paso 79912 Texas</p>
              </MetaCard>
              <MetaCard>
                <h4>📞 Contact Helpline</h4>
                <p>+1 915 987 2546</p>
              </MetaCard>
            </CompanyMetaGrid>
          </InfoSide>

          {/* Right Panel: Crisp White Form Card Block */}
          <FormCard>
            <h2 style={{textAlign:"center", marginBottom:"10px"}}>Contact Us</h2>
            <StyledForm onSubmit={handleSubmit}>
              <FormRow>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                   <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormRow>

          <ConsentWrapper>
             <ConsentText>
                  By submitting your phone number, you agree to receive SMS text appointment reminders from El Paso Water Quality LLC. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. See our <StyledLink href="/privacypolicy">Privacy Policy</StyledLink> and <StyledLink href="/termsandconditions">Terms & Conditions</StyledLink>.
                </ConsentText>
                <CheckboxLabel>
                  <CheckboxInput
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    required
                  />
                  <span className="agree-text">I agree</span>
                </CheckboxLabel>
               
              </ConsentWrapper>

           

              <TextArea
                name="message"
                placeholder="Your Message / Specific Water Concerns (Optional)"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit">Submit</Button>
            </StyledForm>
          </FormCard>
        </Container>
      </MainContactSection>

      {/* LIGHT ACCORDION FAQ SECTION */}
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQAccordionContainer>
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <AccordionItem key={index} $isOpen={isOpen}>
                <AccordionHeader onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className="icon">{isOpen ? "−" : "+"}</span>
                </AccordionHeader>
                <AccordionContent $isOpen={isOpen}>
                  <div className="inner-content">
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </FAQAccordionContainer>
      </FAQSection>
    </PageWrapper>
  );
}

// --- Styled Components Definition ---

const PageWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1a202c;
  background-color: #f8f9fa;
  margin-top: 50px;
`;

const MainContactSection = styled.section`
  width: 100%;
  padding: 100px 40px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #edf2f7;

  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #030b14;
  padding: 48px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(3, 11, 20, 0.1);

  @media (max-width: 640px) {
    padding: 32px 24px;
  }
`;

const MainTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 32px 0;
  letter-spacing: -0.5px;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: 2.1rem;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 48px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.1rem;
  color: #cbd5e1;
`;

const CheckIconWrapper = styled.span`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const CompanyMetaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 32px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MetaCard = styled.div`
  h4 {
    margin: 0 0 8px 0;
    font-size: 0.95rem;
    color: #94a3b8;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #e2e8f0;
  }
`;

const FormCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 44px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;

  @media (max-width: 500px) {
    padding: 24px 20px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 18px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ConsentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;

  .agree-text {
    font-weight: 600;
    font-size: 1rem;
    color: #1e293b;
  }
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #1d4ed8;
  cursor: pointer;
  flex-shrink: 0;
`;

const ConsentText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
  color: #111;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8fafc;
  color: #0f172a;
  transition: all 0.2s ease;
  word-break: break-word;
  overflow-wrap: break-word;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #1d4ed8;
    background-color: #ffffff;
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  height: 130px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8fafc;
  color: #0f172a;
  outline: none;
  resize: none;
  transition: all 0.2s ease;
  word-break: break-word;
  overflow-wrap: break-word;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #1d4ed8;
    background-color: #ffffff;
    box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.15);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #1d4ed8;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 6px;

  &:hover {
    background-color: #1e40af;
  }
`;

const FAQSection = styled.section`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 48px;
  text-align: center;
`;

const FAQAccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AccordionItem = styled.div`
  background: #ffffff;
  border: 1px solid ${(props) => (props.$isOpen ? "#1d4ed8" : "#e2e8f0")};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
`;

const AccordionHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a202c;
    padding-right: 16px;
  }

  .icon {
    font-size: 1.5rem;
    color: #4a5568;
    font-weight: 400;
    line-height: 1;
  }
`;

const AccordionContent = styled.div`
  max-height: ${(props) => (props.$isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);

  .inner-content {
    padding: 0 24px 24px 24px;
    border-top: ${(props) => (props.$isOpen ? "1px solid #f7fafc" : "none")};
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }
`;

const StyledLink = styled(Link)`
  color: #1d4ed8;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: #1e40af;
  }
`;