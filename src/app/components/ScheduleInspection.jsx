'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// --- Styled Components ---

const FormSection = styled.section`
  width: 100%;
  padding: 80px 40px;
  background-color: #030b14; /* Match deep dark navy background */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// --- Left Info Panel Styles ---
const InfoSide = styled.div`
  color: #ffffff;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 32px 0;
  letter-spacing: -0.5px;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.05rem;
  font-weight: 500;
  color: #e2e8f0;
`;

const CheckIconWrapper = styled.span`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

// --- Right Card Form Styles ---
const FormCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    padding: 24px 16px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #f8fafc;
  color: #1a202c;
  transition: all 0.2s ease;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    border-color: #1d4ed8;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #1d4ed8; /* Vibrant bright royal blue */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 8px;

  &:hover {
    background-color: #1e40af;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

// --- Inline SVGs ---
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// --- Main Component ---

export default function ScheduleInspection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

const [address, setAddress]=useState('')
const [preferredDate, setPreferredDate]=useState('')
const [preferredTime, setPreferredTime]=useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



    const handleSubmit = async (e) => {
      e.preventDefault();
  
      Swal.fire({ text: "Sending message..." });
      Swal.showLoading();
  
      const payload = {
        ...formData,
        message:`At: ${address}, On: ${preferredDate}, By: ${preferredTime}`,
        recipientEmail: "davidnnamdiesom@gmail.com",
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
  
          setFormData({ name: "", email: "", phone: ""});
          setAddress('');
          setPreferredDate('');
          setPreferredTime('');
        } else {
          Swal.fire({ icon: "error", text: data.error || "Something went wrong" });
        }
      } catch (error) {
        Swal.fire({ icon: "error", text: "Network error. Try again." });
      }
    };

  return (
    <FormSection>
      <Container>
        {/* Left Side Content */}
        <InfoSide>
          <MainTitle>
            Schedule Your Free<br />
            Water Inspection
          </MainTitle>
          <BulletList>
            <BulletItem>
              <CheckIconWrapper><CheckIcon /></CheckIconWrapper>
              Takes about 30 minutes
            </BulletItem>
            <BulletItem>
              <CheckIconWrapper><CheckIcon /></CheckIconWrapper>
              100% free, no obligation
            </BulletItem>
            <BulletItem>
              <CheckIconWrapper><CheckIcon /></CheckIconWrapper>
              Get answers you can trust
            </BulletItem>
          </BulletList>
        </InfoSide>

        {/* Right Side Form White Box */}
        <FormCard>
          <StyledForm onSubmit={handleSubmit}>
            <FormRow>
              <InputGroup>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <StyledInput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </FormRow>

            <InputGroup>
              <StyledInput
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <StyledInput
                type="text"
                name="address"
                placeholder="Service Address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required
              />
            </InputGroup>

            <FormRow>
              <InputGroup>
                <StyledInput
                  type="text"
                  name="preferredDate"
                  placeholder="Preferred Date"
                  value={preferredDate}
                  onChange={(e)=>setPreferredDate(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <StyledInput
                  type="text"
                  name="preferredTime"
                  placeholder="Preferred Time"
                  value={preferredTime}
                  onChange={(e)=>setPreferredTime(e.target.value)}
                />
              </InputGroup>
            </FormRow>

            <SubmitButton type="submit">
              Schedule My Free Inspection
            </SubmitButton>
          </StyledForm>
        </FormCard>
      </Container>
    </FormSection>
  );
}