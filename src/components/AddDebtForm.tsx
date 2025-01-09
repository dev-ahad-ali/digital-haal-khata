'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AddDebtForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    amount: '',
    date: '',
    status: 'unpaid',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      status: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend or state management
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      customerName: '',
      amount: '',
      date: '',
      status: 'unpaid',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <Label htmlFor='customerName'>Customer Name</Label>
        <Input
          id='customerName'
          name='customerName'
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor='amount'>Amount</Label>
        <Input
          id='amount'
          name='amount'
          type='number'
          step='0.01'
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor='date'>Date</Label>
        <Input
          id='date'
          name='date'
          type='date'
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor='status'>Status</Label>
        <Select onValueChange={handleStatusChange} defaultValue={formData.status}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='unpaid'>Unpaid</SelectItem>
            <SelectItem value='partially paid'>Partially Paid</SelectItem>
            <SelectItem value='paid'>Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type='submit'>Add Debt/Payment</Button>
    </form>
  );
}
