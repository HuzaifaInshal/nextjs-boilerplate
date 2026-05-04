"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CountryFlag from "@/components/ui/CountryFlag";
import DateRangeSelector from "@/components/ui/DateRangeSelector";
import DateRangeSelectorV2 from "@/components/ui/DateRangeSelectorV2";
import DateSelector from "@/components/ui/DateSelector";
import DateTimeRangeSelector from "@/components/ui/DateTimeRangeSelector";
import DateTimeSelector from "@/components/ui/DateTimeSelector";
import Dropdown from "@/components/ui/Dropdown";
import LabelContainer from "@/components/ui/LabelContainer";
import { Modal, ModalClose } from "@/components/ui/Modal";
import OtpInput from "@/components/ui/OtpInput";
import PasswordInput from "@/components/ui/PasswordInput";
import PhoneInput from "@/components/ui/PhoneInput";
import Select from "@/components/ui/Select";
import { Sheet, SheetClose } from "@/components/ui/Sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/Tables";
import TextInput from "@/components/ui/TextInput";
import TimeRangeSelector from "@/components/ui/TimeRangeSelector";
import TimeSelector from "@/components/ui/TimeSelector";

const Section = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-text-primary mb-4 border-b border-border-primary pb-2">
      {title}
    </h2>
    <div className="flex flex-wrap gap-4 items-start">{children}</div>
  </div>
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [dateRangeV2, setDateRangeV2] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({ startDate: null, endDate: null });
  const [dateRange, setDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({ startDate: null, endDate: null });
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [dateTimeRange, setDateTimeRange] = useState<{
    startDateTime: Date | null;
    endDateTime: Date | null;
  }>({ startDateTime: null, endDateTime: null });
  const [time, setTime] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<{
    startTime: string | null;
    endTime: string | null;
  }>({ startTime: null, endTime: null });

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-text-primary mb-8">
        UI Components
      </h1>

      <Section title="Button">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="outline-transparent">Outline Transparent</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button isLoading>Loading</Button>
        <Button disabled>Disabled</Button>
      </Section>

      <Section title="Text Input">
        <TextInput
          label="Text Input"
          placeholder="Enter text..."
          value={textValue}
          setValue={setTextValue}
        />
        <TextInput
          label="With Error"
          placeholder="Enter text..."
          error="This field is required"
        />
        <TextInput label="Required" placeholder="Required field" required />
      </Section>

      <Section title="Password Input">
        <PasswordInput
          label="Password"
          placeholder="Enter password..."
          value={password}
          setValue={setPassword}
        />
      </Section>

      <Section title="Phone Input">
        <PhoneInput
          label="Phone Number"
          value={phone}
          setValue={setPhone}
          defaultCountry="us"
        />
      </Section>

      <Section title="OTP Input">
        <OtpInput label="OTP" value={otp} setValue={setOtp} maxLength={6} />
      </Section>

      <Section title="Select">
        <Select
          label="Select Option"
          value={selectValue}
          setValue={setSelectValue}
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" }
          ]}
        />
      </Section>

      <Section title="Dropdown">
        <Dropdown
          label="Dropdown"
          items={[
            { value: "a", label: "Item A" },
            { value: "b", label: "Item B" },
            { value: "c", label: "Item C", disabled: true }
          ]}
        >
          <Button variant="outline-transparent">Open Dropdown</Button>
        </Dropdown>
      </Section>

      <Section title="Label Container">
        <LabelContainer label="Label" required>
          <div className="border border-border-primary rounded-lg px-3 py-2 text-sm text-text-secondary">
            Wrapped content
          </div>
        </LabelContainer>
        <LabelContainer label="With Error" error="Something went wrong">
          <div className="border border-border-primary rounded-lg px-3 py-2 text-sm text-text-secondary">
            Wrapped content
          </div>
        </LabelContainer>
      </Section>

      <Section title="Date Selector">
        <DateSelector value={date} setValue={setDate} />
      </Section>

      <Section title="Date Range Selector">
        <DateRangeSelector value={dateRange} setValue={setDateRange} />
      </Section>

      <Section title="Date Range Selector V2">
        <DateRangeSelectorV2 value={dateRangeV2} setValue={setDateRangeV2} />
      </Section>

      <Section title="Date Time Selector">
        <DateTimeSelector value={dateTime} setValue={setDateTime} />
      </Section>

      <Section title="Date Time Range Selector">
        <DateTimeRangeSelector
          value={dateTimeRange}
          setValue={setDateTimeRange}
        />
      </Section>

      <Section title="Time Selector">
        <TimeSelector value={time} setValue={setTime} />
      </Section>

      <Section title="Time Range Selector">
        <TimeRangeSelector value={timeRange} setValue={setTimeRange} />
      </Section>

      <Section title="Table">
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alice</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Inactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Section>

      <Section title="Modal">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal open={modalOpen} onOpenChange={setModalOpen}>
          <div className="p-6 w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Modal Title
              </h3>
              <ModalClose />
            </div>
            <p className="text-sm text-text-secondary">
              This is a modal dialog example.
            </p>
          </div>
        </Modal>
      </Section>

      <Section title="Sheet">
        <Button onClick={() => setSheetOpen(true)}>Open Sheet</Button>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Sheet Title
              </h3>
              <SheetClose />
            </div>
            <p className="text-sm text-text-secondary">
              This is a side sheet example.
            </p>
          </div>
        </Sheet>
      </Section>
    </main>
  );
}
