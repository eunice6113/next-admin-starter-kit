"use client";

import { store } from "./store";
import { Provider } from "react-redux";

import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <ConfirmDialog />
    <Toast />

    {children}
  </Provider>;
}
