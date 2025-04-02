"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { CheckIcon, Loader2, MoreHorizontal, Plus } from "lucide-react";
import {
  createUser,
  deleteUser,
  getUsers,
  searchUsers,
  updateUser,
} from "@/src/lib/actions/users-manager";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import { User } from "@/src/types";
import { SearchInput } from "@/src/components/dashboard/search-input";
import { RoleSelect } from "@/src/components/pages/users/role-select";
import { StatusSelect } from "@/src/components/pages/users/status-select";

export const UserTable = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    gender: "",
    role: "user",
    status: "active",
  });

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (debouncedSearchTerm !== searchTerm) {
        setIsSearching(true);
        setDebouncedSearchTerm(searchTerm);

        if (searchTerm.trim()) {
          const searchResults = await searchUsers(searchTerm);
          setUsers(searchResults);
        } else {
          const allUsers = await getUsers();
          setUsers(allUsers);
        }

        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, debouncedSearchTerm]);

  const handleCreateUser = async () => {
    setIsProcessing(true);

    try {
      const userData = {
        id: crypto.randomUUID(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        status: newUser.status,
      };

      await createUser(userData);

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);

      setNewUser({
        name: "",
        email: "",
        gender: "",
        role: "user",
        status: "active",
      });

      setIsCreateDialogOpen(false);
      toast.success("Successfully added!");
      setIsProcessing(false);
    } catch (error) {
      console.log("Failed to create user:", error);
    }
  };

  const openDeleteDialog = (user: User) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteUser = async () => {
    if (!selectedUser) return;

    setIsProcessing(true);

    try {
      await deleteUser(selectedUser.id);
      const updatedUsers = await getUsers();

      setUsers(updatedUsers);

      setSelectedUser(null);
      setIsDeleteDialogOpen(false);

      toast.success("Successfully deleted!");
    } catch (error) {
      console.log("Failed to delete user:", error);

      toast.error("Failed to delete user");
    } finally {
      setIsProcessing(false);
    }
  };

  const openEditDialog = (user: User) => {
    setSelectedUser(user);
    // setEditFormData({
    //   name: user.name,
    //   email: user.email,
    //   role: user.role,
    //   status: user.status,
    // });
    setIsEditDialogOpen(true);
  };

  const handleEditUser = async () => {
    if (!selectedUser) return;

    setIsProcessing(true);

    try {
      await updateUser(selectedUser.id, selectedUser);

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);

      setSelectedUser(null);
      setIsEditDialogOpen(false);

      toast.success("Successfully updated!");
    } catch (error) {
      console.log("Failed to update user:", error);

      toast.error("Failed to update user");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-col items-start justify-between gap-4 lg:flex-row md:items-center">
          <CardTitle>User Management</CardTitle>

          <div className="lg:ml-auto flex items-center gap-4">
            <SearchInput
              className="w-full"
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
              placeholder="Search users..."
              isLoading={isSearching}
            />

            <Dialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
            >
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>

                  <DialogDescription>
                    Fill in the details to create a new user.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">
                      Role
                    </Label>

                    <RoleSelect
                      className={"col-span-3"}
                      value={newUser.role}
                      onValueChange={(value) =>
                        setNewUser({ ...newUser, role: value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>

                    <StatusSelect
                      className="col-span-3"
                      value={newUser.status}
                      onValueChange={(value) =>
                        setNewUser({ ...newUser, status: value })
                      }
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateDialogOpen(false)}
                  >
                    Cancel
                  </Button>

                  <Button disabled={isProcessing} onClick={handleCreateUser}>
                    {isProcessing && (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                    <span>Create</span>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center capitalize">
                      no data
                    </TableCell>
                  </TableRow>
                )}

                {users.map((user) => {
                  return (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <div
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                            {
                              "bg-green-100 text-green-800":
                                user.status === "active",
                              "bg-red-100 text-red-800":
                                user.status === "inactive",
                            }
                          )}
                        >
                          <CheckIcon className="size-3.5" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                              className="cursor-pointer"
                              onClick={() => openEditDialog(user)}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              variant="destructive"
                              className="cursor-pointer"
                              onClick={() => openDeleteDialog(user)}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* edit dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>

            <DialogDescription>Update user information.</DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Name
                </Label>
                <Input
                  id="edit-name"
                  value={selectedUser.name}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-role" className="text-right">
                  Role
                </Label>

                <RoleSelect
                  className={"col-span-3"}
                  value={selectedUser.role}
                  onValueChange={(value) =>
                    setSelectedUser({ ...selectedUser, role: value })
                  }
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Status
                </Label>

                <StatusSelect
                  className="col-span-3"
                  value={selectedUser.status}
                  onValueChange={(value) =>
                    setSelectedUser({ ...selectedUser, status: value })
                  }
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>

            <Button disabled={isProcessing} onClick={handleEditUser}>
              {isProcessing && <Loader2 className=" h-4 w-4 animate-spin" />}

              <span>Save Changes</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* delete dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>

            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="py-4">
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>

            <Button
              disabled={isProcessing}
              variant="destructive"
              onClick={handleDeleteUser}
            >
              {isProcessing && <Loader2 className=" h-4 w-4 animate-spin" />}

              <span>Delete</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
