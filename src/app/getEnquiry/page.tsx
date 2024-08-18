// pages/EnquiryPage.tsx
"use client"
import { useEffect, useState } from 'react';

const EnquiryPage = () => {
  const [enquiries, setEnquiries] = useState<any[]>([]); // Assuming Enquiry model structure

  useEffect(() => {
    async function fetchEnquiries() {
      try {
        const response = await fetch('https://oldassignment.adaptable.app/get-enquiry'); // Adjust URL as per your setup
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchEnquiries();
  }, []);

  return (
    <div>
      <h1>Enquiries</h1>
      <pre>{JSON.stringify(enquiries, null, 2)}</pre>
    </div>
  );
};

export default EnquiryPage;
