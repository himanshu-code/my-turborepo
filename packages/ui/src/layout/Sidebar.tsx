import styles from "./Sidebar.module.css";

export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface SidebarProps {
  className?: string;
  navItems?: NavItem[];
  children?: React.ReactNode;
}

const defaultNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
];

export function Sidebar({
  className = "",
  navItems = defaultNavItems,
  children
}: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      {children ? (
        children
      ) : (
        <nav className={styles["sidebar-nav"]}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles["nav-item"]} ${item.isActive ? styles.active : ""}`}
            >
              {item.icon && (
                <span className={styles["nav-icon"]}>{item.icon}</span>
              )}
              <span className={styles["nav-label"]}>{item.label}</span>
              {item.isActive && (
                <span className={styles["nav-indicator"]}>›</span>
              )}
            </a>
          ))}
        </nav>
      )}
    </aside>
  );
}
