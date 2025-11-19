import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const SessionContext = createContext({ session: null, user: null });

export function SessionProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadSession() {
      try {
        const { data } = await supabase.auth.getSession();
        if (mounted) setSession(data?.session ?? null);
      } catch (err) {
        console.error("Error getting supabase session:", err);
      }
    }

    loadSession();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
    });

    return () => {
      mounted = false;
      try {
        subscription?.subscription?.unsubscribe?.();
        subscription?.unsubscribe?.();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const value = { session, user: session?.user ?? null };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export default SessionProvider;
